from django.urls import path
from . import views

app_name = 'maps'
urlpatterns = [
    path('', views.simple_map),
    path('co-ban/', views.simple_map, name='co-ban'),
    path('tim-kiem/', views.search, name="tim-kiem"),
    path('duong_di/', views.duong_di, name='duong_di'),
]
