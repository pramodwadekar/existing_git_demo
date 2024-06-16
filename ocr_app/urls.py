from django.contrib import admin
from django.urls import include, path
from .views import *

urlpatterns = [
    path("", homepage, name="homepage"),
    path("add_data/", add_data, name="add_data"),
]