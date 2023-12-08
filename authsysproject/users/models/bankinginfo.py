from django.db import models


class BankingInfo(models.Model):
    bankname = models.CharField(max_length=25)
    acnumber = models.CharField(max_length=15)
    ifsc = models.CharField(max_length=15)
    pancardno = models.CharField(max_length=15)
    pandcard = models.FileField(upload_to='uploads/')
    cheque = models.FileField(upload_to='uploads/')
    pictureproof = models.FileField(upload_to='uploads/')
