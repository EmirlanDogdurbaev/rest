from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=255)
    price = models.PositiveIntegerField(null=True)
    text = models.TextField(max_length=500)

    def __str__(self) :
        return self.title