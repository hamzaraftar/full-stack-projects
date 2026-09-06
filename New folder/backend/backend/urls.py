from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from app.views import CreateUserView,  NoteListView


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # JWT authentication endpoints
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('api/users/register/', CreateUserView.as_view(),
     name='register'),
     path('api/users/me/', CreateUserView.as_view(), name='user_detail'),

    
    # Note endpoints
    path('api/notes/', NoteListView.as_view(), name='note_list'),
    path('api/notes/<int:pk>/', NoteListView.as_view(), name='note_detail'),]
