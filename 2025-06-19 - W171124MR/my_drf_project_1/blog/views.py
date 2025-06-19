from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


class PostView(APIView):
    name = "PostViews"
    # throttle_classes = []
    # permission_classes = []
    # authentication_classes = []

    def get(self, request):
        posts = Post.objects.all()
        serialized = PostSerializer(posts, many=True)

        return Response({'posts': serialized.data})

    def post(self, request):
        post = PostSerializer(data=request.data)
        post.is_valid(raise_exception=True)
        post.save()
        return Response(post.data, status=201)


class PostViewByPK(APIView):
    name = "PostByPKViews"

    # throttle_classes = []
    # permission_classes = []
    # authentication_classes = []

    def get(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)

        serialized = PostSerializer(post)
        return Response({"post": serialized.data})

    def put(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)

        serialized = PostSerializer(post, data=request.data)

        if not serialized.is_valid():
            return Response({"errors": serialized.errors}, status=status.HTTP_400_BAD_REQUEST)

        serialized.save()
        return Response(serialized.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)

        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
