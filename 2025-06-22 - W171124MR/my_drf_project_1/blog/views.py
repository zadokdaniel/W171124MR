from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_authenticated(request):
    return Response("hello from my_authenticated")
