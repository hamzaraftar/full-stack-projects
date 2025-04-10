from rest_framework.decorators import api_view , permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import status
from .serializers import UserSerializer ,NoteSerializer
from django.shortcuts import get_object_or_404
from .models import Note

@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)



#  for creatio and get Notes 
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def note_list_view(request):
    if request.method == 'GET':
        notes = Note.objects.filter(author=request.user)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def note_detail_view(request, pk):
    # Only allow access to the user's own note
    note = get_object_or_404(Note, pk=pk, author=request.user)

    if request.method == 'GET':
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    elif request.method in ['PUT', 'PATCH']:
        serializer = NoteSerializer(note, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
