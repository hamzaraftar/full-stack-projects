from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Blog
from .serializers  import BlogPostSerializer

class BlogApi(APIView):
    def get(self,request,id=None):
        try:
            if id is not None:
                blog = Blog.objects.get(id=id)
                serializer = BlogPostSerializer(blog)
                return Response(serializer.data)
        except Blog.DoesNotExist:
            return Response({"error": "Blog not found"}) 
        
        blogs = Blog.objects.all()
        serializer = BlogPostSerializer(blogs, many=True)
        return Response(serializer.data)


    def post(self,request):
        try:
            serializer = BlogPostSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        except Exception as e:
                return Response({"error": str(e)}) 
        
    def put(self,request,id):
        try:
            blog = Blog.objects.get(id=id)
        except Blog.DoesNotExist:
            return Response({"error": "Blog not found"})
        
        serializer = BlogPostSerializer(blog , data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)    
        return Response(serializer.errors)    
    
    def patch(self,request,id):
        try:
            blog = Blog.objects.get(id=id)
        except Blog.DoesNotExist:
            return Response({"error":"Blog not found"})    

        serializer = BlogPostSerializer(blog ,data=request.data ,partial=True)   
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)    
    
    def delete(self,request,id):
        try:
            blog = Blog.objects.get(id=id)
        except Blog.DoesNotExist:
            return Response({"error":"Blog not found"})
        blog.delete()
        return Response("Delete Successfully")
