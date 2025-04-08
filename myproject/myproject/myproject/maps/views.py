from django.shortcuts import render

# Create your views here.
def simple_map(request):
    return render(request, 'maps/simple_map.html')

def search(request):
    return render(request, 'maps/search_map.html')

def duong_di(request):
    return render(request, 'maps/duong_di.html')