from django.urls import path
from .views import *

urlpatterns = [
    path('register/',UserRegistrationAPIView.as_view(),name="register"),
    path('login/', UserLoginAPIView, name="login"),
    path('logout/', UserLogoutAPIView, name="logout")
]
