from rest_framework import serializers
from .models import Post, Comment
import rest_framework.validators as v


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


def validate_not_length_11(value):
    if len(value) == 11:
        raise v.ValidationError(
            "Content length cannot be 11 characters exactly")


class PostSerializer(serializers.ModelSerializer):
    title = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={
            'required': 'Title is required',
            'blank': "Title cannot be blank",
        },
        validators=[
            v.UniqueValidator(
                queryset=Post.objects.all(),
                message='This post title already exists'
            )
        ]
    )

    content = serializers.CharField(
        min_length=5,
        error_messages={
            "min_length": "You must provide at least 5 characters"
        },
        validators=[
            validate_not_length_11
        ]
    )
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created', 'updated', 'comments']
        # fields = '__all__'
        # exclude = ['id']
