from django.urls import path
from .views import ReportingBotView

urlpatterns = [
    path('reporting-bot', ReportingBotView.as_view(), name="reportingbot"),
]