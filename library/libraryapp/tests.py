from django.test import TestCase
from django.utils import unittest
from django.test.client import RequestFactory
from libraryapp.models import Book, Language, Author, Category, User, BookAndAuthor
from libraryapp.views import category
# Create your tests here.

class BookTestCase(TestCase):
    def setUp(self):
        language = Language.objects.create(name = "English")
        Book.objects.create(name = "Samvel", isbnCode = "Am8974", manufactureYear = "2014-06-15", languageId = language)
    def test_book(self):
        book = Book.objects.get(name = "Samvel")

class LanguageTestCase(TestCase):
    def setUp(self):
        Language.objects.create(name = "English")
    def test_language(self):
        english = Language.objects.get(name = "English")

class AuthorTestCase(TestCase):
    def setUp(self):
        Author.objects.create(name = "Raffi")
    def test_author(self):
        author = Author.objects.get(name = "Raffi")

class CategoryTestCase(TestCase):
    def setUp(self):
        Category.objects.create(name = "Drama")
    def test_category(self):
        category = Category.objects.get(name = "Drama")

class UserTeatCase(TestCase):
    def setUp(self):
        User.objects.create(name = "Seryozha", surname = "Khachatryan", dataOfBirth = "1995-07-10")
    def test_user(self):
        user = User.objects.get(name = "Seryozha", surname = "Khachatryan", dataOfBirth = "1995-07-10")

class BookAndAuthorTestCase(TestCase):
    def setUp(self):
        self.language = Language.objects.create(name = "English")
        self.book = Book.objects.create(name = "Samvel", isbnCode = "Am8974", manufactureYear = "2014-06-15", languageId = self.language)
        self.author = Author.objects.create(name = "Raffi")
        BookAndAuthor.objects.create(bookId = self.book, authorId = self.author)
    def test_bookAndAuthor(self):
        bookAndAuthor = BookAndAuthor.objects.get(bookId = self.book, authorId = self.author)


       
class CategoryTest(unittest.TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_category(self):
        request = self.factory.get('/library/categoryList')
        response = category(request)
        self.assertEqual(response.data_code, Humor)

       



    



