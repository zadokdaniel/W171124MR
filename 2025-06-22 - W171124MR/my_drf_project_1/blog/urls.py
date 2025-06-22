from django.urls import path, include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('posts', views.PostViewSet, basename="post")
router.register('comments', views.CommentViewSet, basename="comment")

urlpatterns = [
    path("", include(router.urls)),
    path('api-auth/', include("rest_framework.urls")),
]
