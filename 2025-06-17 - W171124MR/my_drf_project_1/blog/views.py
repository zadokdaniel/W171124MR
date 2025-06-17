from django.http import JsonResponse

# Create your views here.

def posts(request):
    return JsonResponse({"key": 5, "b": 10, "c": None, "d": True, "e": "string", "f": [1, 2, 4], "g": {"a": 5, "b": 10}})
