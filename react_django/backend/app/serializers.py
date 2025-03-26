from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Note


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['id','username','password']
        extra_kwargs = {"password":{"write_only":True}}
        
        def create(self,validated_data):
            user = User.objects.create(**validated_data)
            return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id','title','content','auther']
        extra_kwargs = {"auther":{"read_only":True}}
