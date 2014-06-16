# Create your models here.

from django.db import models

class Author(models.Model):
   name = models.CharField(max_length=200)

class Category(models.Model):
   name = models.CharField(max_length=50)

class Language(models.Model):
   name = models.CharField(max_length=50)

class User(models.Model):
   name = models.CharField(max_length=20)
   surname = models.CharField(max_length=50)
   dataOfBirth = models.DateTimeField('date of birth')


class Book(models.Model):
   name = models.CharField(max_length=200)
   isbnCode = models.CharField(max_length=20)
   manufactureYear = models.DateTimeField('date published')
   languageId = models.ForeignKey(Language)


class BookAndAuthor(models.Model):
   bookId = models.ForeignKey(Book)
   authorId = models.ForeignKey(Author)

class BookAndCategory(models.Model):
   bookId = models.ForeignKey(Book)
   categoryId = models.ForeignKey(Category)


class BookAndUser(models.Model):
   bookId = models.ForeignKey(Book)
   userId = models.ForeignKey(User)
   dateOfTaking = models.DateTimeField('date of taking')
   dateOfBringingBack = models.DateTimeField('date of bringing back')
   check = models.BooleanField(default=False)

