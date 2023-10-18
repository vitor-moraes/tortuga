from django.shortcuts import render
from .models import User

def home(request):
    all_users = User.objects.all()
    return render(request, 'index.html', {'all_users': all_users})

def save(request):
    user_name = request.POST.get('name')
    User.objects.create(name=user_name)
    all_users = User.objects.all()
    return render(request, 'index.html', {'all_users': all_users})

def edit(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'update.html', {'user': user})
