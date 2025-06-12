from django.http import HttpResponse
# Create your views here.


def index(request):
    return HttpResponse("cards index")


def hello(request):
    return HttpResponse('hello')


def bye(request):
    return HttpResponse('bye')
