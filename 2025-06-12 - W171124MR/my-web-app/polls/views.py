from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed
# Create your views here.


def user_by_id(request, user_id):
    return HttpResponse(f"users page viewing user {user_id}")


def user_by_name(request, user_name):
    return HttpResponse(f"users page viewing user named {user_name}")


def get_message(request, time_value):
    return HttpResponse(f"get message '{time_value}'")


def by_regexp(request):
    return HttpResponse('hello from regexp path ' + request.path)


# 1. create a new django project
# 2. create a blog app -> /blog
# 3. create a url which users a custom date converter -> /blog/posts/2025-05-03
# 4 send a response with the selected date formatted as 

# year: 2025
# month: 05
# day: 03