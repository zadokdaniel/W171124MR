from django.urls import path
from . import views

urlpatterns = [
    path("",  views.posts),
    path("<int:pk>/", views.post_by_pk),

    path("posts/", views.posts),
    path("posts/<int:pk>/", views.post_by_pk),
]
