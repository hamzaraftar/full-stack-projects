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


    def post(self,request,pk):
        pass

    def put(self,request,pk):
        pass

    def patch(self,request,pk):
        pass

    def delete(self,request,pk):
        pass