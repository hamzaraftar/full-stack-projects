from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id','title','content']

        def validate_title(self,value):
            if not value.strip():
                raise serializers.ValidationError("Title can't be empty")
            return value

        def validate_content(self,value):
            if not value.strip():
                raise serializers.ValidationError("Content can't be empty")            
            return value