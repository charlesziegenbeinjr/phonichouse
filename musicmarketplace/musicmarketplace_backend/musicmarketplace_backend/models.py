from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone_number = models.PositiveBigIntegerField()
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'password', 'phone_number']
    class Meta:
        managed = True

class Artist(User):
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'password', 'phone_number']
    class Meta:
        managed = True


class Security(models.Model):
    # id = models.AutoField(primary_key=True)
    ticker = models.CharField(max_length=10)
    artist_name = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    REQUIRED_FIELDS = ['ticker', 'artist_name', 'genre', 'created_date', 'last_updated']
    class Meta:
        managed = True

class DailyPrice(models.Model):
    # id = models.AutoField(primary_key=True)
    security = models.ForeignKey(Security, on_delete=models.CASCADE) # when security is deleted, the assosiated daily prices will be deleted too
    created_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    open_price = models.DecimalField(max_digits=11, decimal_places=6)
    high_price = models.DecimalField(max_digits=11, decimal_places=6)
    low_price = models.DecimalField(max_digits=11, decimal_places=6)
    close_price = models.DecimalField(max_digits=11, decimal_places=6)
    adj_close_price = models.DecimalField(max_digits=11, decimal_places=6)
    volume = models.BigIntegerField()

    REQUIRED_FIELDS = ['open_price', 'high_price', 'low_price', 'close_price', 'adj_close_price', 'volume']
    class Meta:
        managed = True


