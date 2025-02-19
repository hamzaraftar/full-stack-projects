from .import views
from django.urls import path
urlpatterns = [   
    path('notes/', views.NoteListCreateView.as_view(), name='note-list-create'),
    path('notes/delete/<int:pk>', views.NoteDeleteView.as_view(), name='note-list-create'),
]
