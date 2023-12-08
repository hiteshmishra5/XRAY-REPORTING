from django.db import models


class ReportingArea(models.Model):
    mriopt = models.CharField(max_length=100)
    mriothers = models.CharField(max_length=100)
    ctopt = models.CharField(max_length=100)
    ctothers = models.CharField(max_length=100)
    xray = models.BooleanField()
    others = models.BooleanField()
