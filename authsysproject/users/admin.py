from django.contrib import admin
from .models.personalinfo import PersonalInfo
from .models.qualificationdetails import QualificationDetails
from .models.bankinginfo import BankingInfo
from .models.reportingarea import ReportingArea
from .models.timeavailability import TimeAvailability
from .models.instpersonalinfo import InstPersonalInfo
from .models.institutionmodalities import InstitutionModalities
from .models.patientdata import PatientInfo
from .models.patientdetails import PatientDetails
from .models.City import City
from .models.Client import Client
from .models.Date import Date
from .models.Location import Location
from .models.workexp import WorkExp
from .models.serviceslist import ServicesList
from .models.audiopatientdata import audioPatientDetails
from .models.optometrydata import optopatientDetails
from .models.vitalpatientdata import vitalPatientDetails
from .models.DICOMData import DICOMData

admin.site.register(PersonalInfo)
admin.site.register(WorkExp)
admin.site.register(QualificationDetails)
admin.site.register(BankingInfo)
admin.site.register(ReportingArea)
admin.site.register(TimeAvailability)
admin.site.register(InstPersonalInfo)
admin.site.register(InstitutionModalities)
admin.site.register(PatientInfo)
admin.site.register(PatientDetails)
admin.site.register(audioPatientDetails)
admin.site.register(optopatientDetails)
admin.site.register(vitalPatientDetails)
admin.site.register(City)
admin.site.register(Client)
admin.site.register(Date)
admin.site.register(Location)
admin.site.register(ServicesList)
admin.site.register(DICOMData)

# Register your models here.
