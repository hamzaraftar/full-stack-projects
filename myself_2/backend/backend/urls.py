from django.contrib import admin
from django.urls import path
from app.views import TotoAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/todo/',TotoAPIView.as_view() ,name="todo_details"),
    path('api/todo/<int:pk>/',TotoAPIView.as_view() ,name="todo")

]
