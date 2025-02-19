from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from django.urls import path
from .views import get_notes,MyTokenObtainPairSerializer



urlpatterns = [

    path('token/', MyTokenObtainPairSerializer.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes/', get_notes),
 
]