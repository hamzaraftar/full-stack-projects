from django.contrib import admin
from django.urls import path
from app.views import CreateUserView ,NoteListCreate,NoteDelete
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", CreateUserView.as_view() ,name="Creation-of-Users"),
# ----------------------------------For Note---------------------------------
    path('api/notes/', NoteListCreate.as_view() ,name="display-create-Notes"),
    path('api/notes/delete/<int:pk>/', NoteDelete.as_view() ,name="delete-Notes"),
# -----------------------------------------------------------------------------
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
    