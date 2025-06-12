from django.urls import path
from .views import index, hello, bye

urlpatterns = [
    path('', index),
    path('hello/', hello),
    path('bye/', bye)
]
