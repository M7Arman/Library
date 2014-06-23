from django.contrib import admin
from libraryapp.models import Book
from libraryapp.models import Author
from libraryapp.models import Category
from libraryapp.models import Language
from libraryapp.models import User
from libraryapp.models import BookAndAuthor
from libraryapp.models import BookAndCategory
from libraryapp.models import BookAndUser

class BookAdmin(admin.ModelAdmin):
   list_display = ['name', 'id']

class AuthorAdmin(admin.ModelAdmin):
   list_display = ['name', 'id']

class CategoryAdmin(admin.ModelAdmin):
   list_display = ['name', 'id']   

class LanguageAdmin(admin.ModelAdmin):
   list_display = ['name', 'id']

class UserAdmin(admin.ModelAdmin):
   list_display = ['name', 'id']

class BookAndAuthorAdmin(admin.ModelAdmin):
   list_display = ['id', 'getAuthorName', 'getBookName' ]
   def getAuthorName(self,obj):
      return obj.authorId.name
   
   def getBookName(self,obj):
      return obj.bookId.name
         

admin.site.register(Book, BookAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Language, LanguageAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(BookAndAuthor, BookAndAuthorAdmin)
admin.site.register(BookAndCategory)
admin.site.register(BookAndUser)
# Register your models here.
