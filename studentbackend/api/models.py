from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    course = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    enrollment_date = models.DateField()

    def __str__(self):
        return self.name


