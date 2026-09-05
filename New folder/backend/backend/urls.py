from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from app.views import CreateUserView, NoteDetailView, UserInfoView, NoteCreateView, NoteListView


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # JWT authentication endpoints
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/users/register/', CreateUserView.as_view(), name='register'),

    # User info endpoint for the currently logged-in user
    path('api/userinfo/', UserInfoView.as_view(), name='userinfo'),

    # Note endpoints
    path('api/notes/', NoteListView.as_view(), name='note_list'),
    path('api/notes/<int:pk>/', NoteDetailView.as_view(), name='note_detail'),
    path('api/notes/create/', NoteCreateView.as_view(), name='note_create'),
]
