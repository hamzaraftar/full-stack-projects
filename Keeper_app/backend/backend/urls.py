from django.contrib import admin
from django.urls import path
from app import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Uesr
    path('create-user/', views.create_user, name='create_user'),
    path('user-info/', views.user_info, name='user_info'),

    # Note
    path('note/',views.todo_list_view , name='for creation and get all Note'),
    # Tokens
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),    
]
