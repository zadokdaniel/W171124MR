from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def posts(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serialized = PostSerializer(posts, many=True)

        return Response({'posts': serialized.data})
    elif request.method == 'POST':
        post = PostSerializer(data=request.data)
        post.is_valid(raise_exception=True)
        post.save()
        return Response(post.data, status=201)


@api_view(['GET'])
def post_by_pk(request, pk):
    post = Post.objects.get(pk=pk)
    serialized = PostSerializer(post)

    return Response(serialized.data)
