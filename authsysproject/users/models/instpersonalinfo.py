from django.contrib.auth.models import User
from django.db import models


class InstPersonalInfo(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    instadd = models.CharField(max_length=100)
    cnprname = models.CharField(max_length=30)
    cnprdesignation = models.CharField(max_length=25)
    cnprphone = models.CharField(max_length=10)
    altcnprname = models.CharField(max_length=30)
    altcnprdesignation = models.CharField(max_length=25)
    altcnprphone = models.CharField(max_length=10)
    emailfraccount = models.EmailField(max_length=50)
    accountcnpr = models.CharField(max_length=15)
    acccnprphone = models.CharField(max_length=10)
