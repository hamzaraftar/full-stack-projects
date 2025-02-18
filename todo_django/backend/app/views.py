from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET'])
def get_todos(request):
    tods = Todo.objects.all()[::-1]
    serializer = TodoSerializer(tods, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get__Todo_by_id(request,pk):
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(todo, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_todo(request):
    data = request.data
    todo = Todo.objects.create(
        todo_name = data['todo_name'],
    )
    serializer = TodoSerializer(todo, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def update_todo(request,pk):
    try:
        todo = Todo.objects.get(id=pk)
    except Todo.DoesNotExist:
        return Response('Todo does not exist')
    
    serializer = TodoSerializer(todo, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response('Todo was updated')
    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_todo(request,pk):
    try:
        todo = Todo.objects.get(id=pk)
        todo.delete()
        return Response('Todo was deleted')
    except Todo.DoesNotExist:
        return Response('Todo does not exist')    