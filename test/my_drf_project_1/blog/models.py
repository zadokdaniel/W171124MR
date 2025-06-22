from django.db import models


class Post(models.Model):
    title = models.CharField(
        max_length=100,
        unique=True
    )
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
