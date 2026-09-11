from django.contrib import admin
from django.urls import path
from app.views import NotesView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/notes/', NotesView.as_view(), name='note_list'),
    path('api/notes/<int:pk>/', NotesView.as_view(), name='note_list'),

]
