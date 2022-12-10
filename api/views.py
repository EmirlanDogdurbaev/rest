from django.shortcuts import render


# Create your views here.
from rest_framework import viewsets
from . import models
from .serializer import ArticleSer

class ArticleSet(viewsets.ModelViewSet):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSer