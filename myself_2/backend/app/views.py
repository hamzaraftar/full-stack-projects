from .models import Todo
from .serializers import TodoSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class TotoAPIView(APIView):
    def get(self,request,pk=None):
        if pk is not None:
            try:
                todo = Todo.objects.get(pk=pk)
            except Todo.DoesNotExist:
                return Response({"error":f"Todo with id {pk} is not found"}, status=404)

        todo = Todo.objects.all()
        serializer = TodoSerializer(todo, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data,status=201)
        return Response(serializer.errors ,status=400)
    
    def put(self,request,pk):
        try:
            todo = Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            return Response({"error":"not found"},status=404)

        serializer = TodoSerializer(todo,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self,request,pk):
        try:
            todo = Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            return Response({"error":"not found"},status=404)

        serializer = TodoSerializer(todo , data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)    

    def delete(self,request,pk):
        try:
            todo = Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            return Response({"error":"not found"},status=404)

        todo.delete()
        return Response({"message":"Todo Delete successfully "})    