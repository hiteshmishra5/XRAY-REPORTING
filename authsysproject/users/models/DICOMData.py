from django.db import models

class DICOMData(models.Model):
    patient_name = models.CharField(max_length=50, blank=True)
    patient_id = models.CharField(max_length=20, blank=True)
    age = models.CharField(max_length=50, blank=True)
    gender = models.CharField(max_length=50, blank=True)
    study_date = models.CharField(max_length=50, blank=True)
    study_description = models.CharField(max_length=100, blank=True)
    dicom_file = models.FileField(upload_to='uploads/')
    jpeg_file = models.ImageField(upload_to='uploads/')