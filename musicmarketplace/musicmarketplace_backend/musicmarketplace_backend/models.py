from djongo import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone_number = models.PositiveBigIntegerField()
    REQUIRED_FIELDS = ['phone_number', 'first_name', 'last_name', 'email']

    