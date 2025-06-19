from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status

from rest_framework.mixins import CreateModelMixin, ListModelMixin, DestroyModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.generics import GenericAPIView


class PostView(GenericAPIView, ListModelMixin, CreateModelMixin):
    name = "PostViews"

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class PostViewByPK(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    name = "PostByPKViews"

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
