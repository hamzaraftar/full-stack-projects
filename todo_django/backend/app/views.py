from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET'])
def get_todos(request):
    tods = Todo.objects.all()
    serializer = TodoSerializer(tods, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get__Todo_by_id(request,pk):
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(todo, many=False)
    return Response(serializer.data)

