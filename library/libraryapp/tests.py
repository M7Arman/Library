from django.test import TestCase
from libraryapp.models import Book
# Create your tests here.
class BookTest(TestCase):
    def setup(self):
        Book.objects.create(name = "Samvel", isbnCode = "AM987")
        Book.objects.create(name = "Xent", isbnCode = "Am654")

    def test_book_can_speak(self):
        Samvel =  Book.objects.get(name = "Samvel")

