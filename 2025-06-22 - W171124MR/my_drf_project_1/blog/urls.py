from django.urls import path, include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('boom', views.BoomViewSet, basename="post")

urlpatterns = [
    path("", include(router.urls)),
    path('posts/', views.PostView.as_view()),
    path('posts/<int:pk>/', views.PostViewByPK.as_view())
]
