from .models import Post
from .serializers import PostSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action


class PostView(ListCreateAPIView):
    name = "PostViews"

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostViewByPK(RetrieveUpdateDestroyAPIView):
    name = "PostByPKViews"

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class BoomViewSet(ViewSet):
    def list(self, request):
        return Response("list")

    def create(self, request):
        return Response("create")

    def retrieve(self, request, pk):
        return Response("retrieve")

    def update(self, request, pk):
        return Response("update")

    def partial_update(self, request, pk):
        return Response("partial_update")

    def destroy(self, request, pk):
        return Response("destroy")

    @action(detail=False, methods=['get'])
    def custom_action(self, request, pk=None):
        return Response('custom_action')
