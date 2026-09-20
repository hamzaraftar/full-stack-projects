from rest_framework import serializers
from .models import Todo
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ['id','title','content','created_at','updated_at']


        def validate_title(self,value):
            if not value.strip():
                raise serializers.ValidationError("Title can't be empty")
            return value

        def validate_content(self,value):
            if not value.strip():
                raise serializers.ValidationError("Content can't be empty")            
            return value