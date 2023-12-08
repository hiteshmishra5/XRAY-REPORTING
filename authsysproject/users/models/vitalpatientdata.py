from django.db import models


class vitalPatientDetails(models.Model):
    PatientId = models.CharField(max_length=50)
    PatientName = models.CharField(max_length=70)
    age = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    TestDate = models.CharField(max_length=50)
    ReportDate = models.CharField(max_length=50)
    height = models.CharField(max_length=50, null=True, default=None, blank=True)
    weight = models.CharField(max_length=50, null=True, default=None, blank=True)
    blood = models.CharField(max_length=50, null=True, default=None, blank=True)
    pulse = models.CharField(max_length=50, null=True, default=None, blank=True)

    def __str__(self):
        return self.PatientId