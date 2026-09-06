from .models import Note
from django.contrib.auth.models import User
from .serializers import NoteSerializer, UserSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

class CreateUserView(APIView):
    def get_permissions(self):
        if self.request.method == 'POST':
            return [AllowAny()]
        return [IsAuthenticated()]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully."}, status=201)
        return Response(serializer.errors, status=400)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class NoteListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if pk is not None:
            try:
                note = Note.objects.get(pk=pk, author=request.user)
                serializer = NoteSerializer(note)
                return Response(serializer.data)
            except Note.DoesNotExist:
                return Response({"error": "Note not found."}, status=404)

        notes = Note.objects.all(author=request.user)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, pk):
        try:
            note = Note.objects.get(pk=pk, author=request.user)
        except Note.DoesNotExist:
            return Response({"error": "Note not found."}, status=404)

        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def patch(self, request, pk):
        try:
            note = Note.objects.get(pk=pk, author=request.user)
        except Note.DoesNotExist:
            return Response({"error": "Note not found."}, status=404)

        serializer = NoteSerializer(note, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        try:
            note = Note.objects.get(pk=pk, author=request.user)
        except Note.DoesNotExist:
            return Response({"error": "Note not found."}, status=404)

        note.delete()
        return Response({"message": "Note deleted successfully."}, status=200)