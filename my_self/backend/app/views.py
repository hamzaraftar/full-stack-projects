from .models import Note
from .serializers import NoteSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class NotesView(APIView):

    def get(self , request,pk=None):
        print(request)
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
        pass

    def put (self,request,pk):
        pass


    def patch(self,request,pk):        
        pass


    def delete(self,request,pk):
        pass        