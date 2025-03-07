from django.shortcuts import render
from .serializers import NoteSerializer
from .models import Note
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated , AllowAny
from rest_framework.decorators import permission_classes
from .serializers import UserRegisrationSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self,request ,*args , **kwargs):
        try:
            response = super().post(request, *args, **kwargs)        
            token =  response.data

            access_token = token['access']
            refresh_token = token['refresh']
            res = Response()
            res.data = {'success':True}
            
            res.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/',
            )

            res.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/',
            )

            return res
        except:
            res.data = {'success':False}


class CustomRefreshTokenView(TokenRefreshView):
    def post(self,request ,*args , **kwargs):
        try:
            refresh_token = request.COOKIES.get('refresh_token')
            request.data['refresh'] = refresh_token
            response = super().post(request, *args, **kwargs)
            token =  response.data
            access_token = token['access']
            res = Response()
            res.data = {'refresh':True}

            res.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/',
            )
        except:
            return Response({'refresh':False})    

# Logout
@api_view(['POST'])
def logout(request):
    try:
        res = Response()
        res.data = {'success':True}
        res.delete_cookie('access_token',path='/' , samesite='None')
        res.delete_cookie('refresh_token',path='/' , samesite='None')
        return res
    except:
        return Response({'success':False})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def is_authenticated(request):
    return Response({'authenticated':True})

# Register
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = UserRegisrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


# get Notes
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notes(request):
    user = request.user
    notes = Note.objects.filter(owner=user)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

