from .models import Todo
from .serializers import TodoSerializer,UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated

class UserInfo(APIView):
    def get_permissions(self):
        if self.request.method == 'POST':
            return [AllowAny()]
        return [IsAuthenticated()]    

    def get(self,request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message":"User was created successfully "},status=201)
        return Response(serializer.errors, status=400)

class TotoAPIView(APIView):
    def get_permissions(self):
        return [IsAuthenticated()]


    def get(self,request,pk=None):
        if pk is not None:
            try:
                todo = Todo.objects.get(pk=pk,author=request.user)
            except Todo.DoesNotExist:
                return Response({"error":f"Todo with id {pk} is not found"}, status=404)
            
            serializer = TodoSerializer(todo)
            return Response(serializer.data)

        todo = Todo.objects.filter(author=request.user)
        serializer = TodoSerializer(todo, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response (serializer.data,status=201)
        return Response(serializer.errors ,status=400)
    
    def put(self,request,pk):
        try:
            todo = Todo.objects.get(pk=pk,author=request.user)
        except Todo.DoesNotExist:
            return Response({"error":"not found"},status=404)

        serializer = TodoSerializer(todo,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self,request,pk):
        try:
            todo = Todo.objects.get(pk=pk , author=request.user)
        except Todo.DoesNotExist:
            return Response({"error":"not found"},status=404)

        serializer = TodoSerializer(todo , data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)    

    def delete(self,request,pk):
        try:
            todo = Todo.objects.get(pk=pk,author=request.user)
        except Todo.DoesNotExist:
            return Response({"error":"not found"},status=404)

        todo.delete()
        return Response({"message":"Todo Delete successfully "})    