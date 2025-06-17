from django.urls import path
from . import views

urlpatterns = [
    path("",  views.posts),
    path("posts/", views.posts)
]
