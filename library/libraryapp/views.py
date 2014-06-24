from django.shortcuts import render
from django.http import HttpResponse
from libraryapp.models import Category, Book, Author, BookAndAuthor, Language, BookAndCategory
import datetime
import json
# Create your views here.

def category(request):
   callback = request.GET.get('callback', '')
   category = Category.objects.all()
   response = []
   for i in category:
       sendInformation = {
             "category" : i.name
             }
       response.append(sendInformation)
   response = json.dumps(response)
   response = callback + '(' + response + ');'
   return HttpResponse(response)

def bookSearch(request):
   callback = request.GET.get('callback', '')
   bookName = Book.objects.get(name = request.GET['name'])
   bookAndAuthorObj = BookAndAuthor.objects.filter(bookId = bookName.id)
   language = Language.objects.filter(id = bookName.languageId.id)
   category = BookAndCategory.objects.filter(bookId = bookName.id)
   response = []
   for choseBook in bookAndAuthorObj:
       for choseBookLanguage in language:
           for choseBookCategory in category:
               sendInformation = {
                  "authorName" : choseBook.authorId.name,
                  "bookName" : bookName.name,
                  "bookIsbnCode" : bookName.isbnCode,
                  "bookLanguage" : choseBookLanguage.name,
                  "bookCategory" : choseBookCategory.categoryId.name 
             }
       response.append(sendInformation)
   response = json.dumps(response)
   response = callback + '(' + response + ');'
   return HttpResponse(response) 

def authorSearch(request):
   callback = request.GET.get('callback', '')
   authorName = Author.objects.get(name = request.GET['name'])
   response = []
   response.append(authorName.name)
   response = json.dumps(response)
   response = callback + '(' + response + ');'
   return HttpResponse(response)

  
