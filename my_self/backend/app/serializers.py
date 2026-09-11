from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'update_at']        

    def validate_title(self, value):
       if not value.strip():
            raise serializers.ValidationError( "Title cannot be empty or contain only spaces." )
       return value
           
    def validate_content(self, value):
       if not value.strip():
            raise serializers.ValidationError( "Title cannot be empty or contain only spaces." )
       return value