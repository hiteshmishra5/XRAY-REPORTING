from django import forms
from users.models.DICOMData import DICOMData

class DICOMDataForm(forms.ModelForm):
    class Meta:
        model = DICOMData
        fields = ['dicom_file']