from .models import Note
from django.contrib.auth.models import User
from .serializers import NoteSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

# Users registration view
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] 

# Current login user information view
class UserInfoView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

# Note creation view
class NoteCreateView(generics.CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Note list view for the current user
class NoteListView(generics.ListAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)

class NoteDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)