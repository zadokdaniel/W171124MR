from .models import Post
from .serializers import PostSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class PostView(ListCreateAPIView):
    name = "PostViews"

    queryset = Post.objects.all()
    serializer_class = PostSerializer



class PostViewByPK(RetrieveUpdateDestroyAPIView):
    name = "PostByPKViews"

    queryset = Post.objects.all()
    serializer_class = PostSerializer

