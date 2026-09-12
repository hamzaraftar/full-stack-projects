from .models import Note
from .serializers import NoteSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class NotesView(APIView):

    def get(self , request,pk=None):
        if pk is not None:
            try:
                note = Note.objects.get(pk=pk)
                serializer = NoteSerializer(note)
                return Response(serializer.data)
            except Note.DoesNotExist:
                return Response({"error":"Note not found"}, status=404)

        note = Note.objects.all()    
        serializer = NoteSerializer(note, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=201)
        return Response(serializer.errors , status=400)    


    def put (self,request,pk=None):
        if pk is None:
            return Response({"error":"Id in not provided"} , status=400)

        try:
            note = Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            return Response({"error":"Not Found"} ,status=404)

        serializer = NoteSerializer(note ,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


    def patch(self,request,pk=None):        
        if pk is None:
            return Response({"error":"Id in not provided"} , status=400)

        try:
            note = Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            return Response({"error":"Not Found"}, status=404)
        
        serializer = NoteSerializer(note, data=request.data , partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)    

    def delete(self,request,pk):
        try:
            note = Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            return Response({"error":"Note Found"} ,status=404)

        note.delete()             
        return Response({"message":"Note delete successfully "} , status=200)