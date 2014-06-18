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
   categoryArr = []
   for i in category:
      categoryArr.append(i.name)
   return HttpResponse(categoryArr)

def bookSearch(request):
   bookSearch = Book.objects.all()
   bookSearchArr = []
   for i in bookSearch:
      bookSearch.append(i.name)
   return HttpResponse(bookSearchArr) 
   
