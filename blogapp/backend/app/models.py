from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=70)
    content  =  models.TextField()
    image = models.ImageField(upload_to='blog_images/', null=True, blank=True)