from django.urls import path, register_converter, re_path
from .views import user_by_id, user_by_name, get_message, by_regexp, get_date
from .converters.time_converter import TimeConverter
from .converters.date_converter import DateConverter

register_converter(TimeConverter, "time")
register_converter(DateConverter, "date")

urlpatterns = [
    re_path(r"^[A-Za-z0-9]{3}$", by_regexp),
    path("users/<int:user_id>/", user_by_id),
    path("users/<str:user_name>/", user_by_name),
    path("message/<time:time_value>/", get_message),
    path("message/<date:date_value>/", get_date),
]
