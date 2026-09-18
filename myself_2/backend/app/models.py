from django.db import models
# from django.contrib.auth.models import User


class Todo(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=100)
    # author = models.ForeignKey(User,on_delete=models.CASCADE ,related_name="todo")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)