from django.contrib import admin
from django.urls import path
from app.views import TotoAPIView,UserInfo
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),

    # for user related        
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # JWT authentication endpoints
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('api/users/register/', UserInfo.as_view(),name='register'),
    path('api/users/me/', UserInfo.as_view(), name='user_detail'),


    # for todos
    path('api/todo/',TotoAPIView.as_view() ,name="todo_details"),
    path('api/todo/<int:pk>/',TotoAPIView.as_view() ,name="todo")

]
