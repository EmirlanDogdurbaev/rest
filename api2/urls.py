from django.urls import path , include
from rest_framework.routers import DefaultRouter
from .views import ArticleSet

router = DefaultRouter()
router.register('api', ArticleSet)

urlpatterns = [
    path('', include(router.urls))
]