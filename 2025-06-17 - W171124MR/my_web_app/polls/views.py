from django.shortcuts import HttpResponse, render
from .models import Question

import math
from datetime import datetime


def example(request):
    latest_question_list = Question.objects.order_by("-published_date")[:5]
    print(dir(latest_question_list[0]))

    context = {
        "person": {"name": "John Doe", "age": 30},
        "first_name": "john",
        "last_name": "doe",
        "is_happy": True,
        "today": datetime.now(),
        "age": 50,
        "pi": math.pi,
        "latest_question_list": latest_question_list
    }

    return render(request, 'polls/example.html', context)


def index(request):
    latest_question_list = Question.objects.order_by("-published_date")[:5]

    return render(request, 'polls/index.html', {"questions": latest_question_list})


def detail(request, question_id):
    return HttpResponse(f"this is question details of question id {question_id}")


def results(request, question_id):
    return HttpResponse(f"You are looking at the results of question {question_id}")


def vote(request, question_id):
    return HttpResponse(f"You are voting on {question_id}")
