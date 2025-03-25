from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from app import views

urlpatterns = [
    path('blog/' ,views.BlogApi.as_view()),
    path('blog/<int:id>/' , views.BlogApi.as_view()),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)