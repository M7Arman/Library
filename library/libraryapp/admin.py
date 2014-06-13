from django.contrib import admin
from libraryapp.models import Book
from libraryapp.models import Author
from libraryapp.models import Category
from libraryapp.models import Language
from libraryapp.models import User
from libraryapp.models import BookAndAuthor
from libraryapp.models import BookAndCategory
from libraryapp.models import BookAndUser

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Language)
admin.site.register(User)
admin.site.register(BookAndAuthor)
admin.site.register(BookAndCategory)
admin.site.register(BookAndUser)
# Register your models here.
