from django.shortcuts import render
from django.http import HttpResponse
from libraryapp.models import Category
import datetime
def example(request):
   now = datetime.datetime.now()
   html = "<html><body>It is now %s.</body></html>" % now
   return HttpResponse(html)
# Create your views here.

def category(request):
   category = Category.objects.all()
   arr = []
   for i in category:
      arr.append(i.name)
   return HttpResponse(arr)
