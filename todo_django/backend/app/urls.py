from django.urls import path
from .views import get_todos ,get__Todo_by_id,create_todo,update_todo,delete_todo

urlpatterns = [
    path('todos/', get_todos),
    path('todos/<int:pk>/', get__Todo_by_id),
    path('create/', create_todo),
    path('update/<int:pk>/', update_todo),
    path('delete/<int:pk>/', delete_todo),
]
