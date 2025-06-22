from django.db import models


class Post(models.Model):
    owner = models.ForeignKey(
        "auth.User", related_name='posts', on_delete=models.CASCADE)
    title = models.CharField(
        max_length=100,
        unique=True
    )
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    owner = models.ForeignKey(
        "auth.User", related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, related_name="comments", on_delete=models.CASCADE)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.post.title} - {self.content[:20]}'
