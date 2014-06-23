from django.shortcuts import render
from django.http import HttpResponse
from libraryapp.models import Category, Book, Author, BookAndAuthor, Language
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

def bookSearch(request):
   callback = request.GET.get('callback', '')
   bookName = Book.objects.get(name = request.GET['bookName'])
   bookAndAuthorObj = BookAndAuthor.objects.filter(bookId = bookName.id)
   #authorName = Author.objects.filter(id = bookAndAuthorObj.authorId)
   #language = Language.objects.filter(id = bookName.languageId)
   response = []
   for y in bookAndAuthorObj:
      response.append(y.authorId.name)
   response.append(bookName.name)
   response.append(bookName.id)
   #response.append(bookName.manufactureYear)
   response.append(bookName.isbnCode)
   #response.append(bookAndAuthorObj.bookId)
   response = json.dumps(response)
   response = callback + '(' + response + ');'
   return HttpResponse(response) 
  
def randomTest(request):
   callback = request.GET.get('callback', '')
   req = []
   req.append("Hello")
   req.append("hi")
   req.append("hjhvjhv")
   response = json.dumps(req)
   response = callback + '(' + response + ');'
   return HttpResponse(response)
