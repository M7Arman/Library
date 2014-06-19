from django.shortcuts import render
from django.http import HttpResponse
from libraryapp.models import Category, Book
import datetime
import json
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

def bookSearch(request, bookName = 'aaa'):
   bookSearch = Book.objects.all()
   bookSearchArr = []
   for i in bookSearch:
      bookSearchArr.append(i.name)
      if bookName == bookSearchArr:
          bookName = bookSearchArr 
   return HttpResponse(bookName) 
  
def randomTest(request):
   callback = request.GET.get('callback', '')
   req = []
   req.append("Hello")
   req.append("hi")
   req.append("hjhvjhv")
   response = json.dumps(req)
   response = callback + '(' + response + ');'
   return HttpResponse(response)
