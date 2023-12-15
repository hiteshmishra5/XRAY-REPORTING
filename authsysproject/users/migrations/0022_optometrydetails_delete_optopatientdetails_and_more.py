# Generated by Django 4.2.7 on 2023-11-25 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0021_vitalpatientdetails'),
    ]

    operations = [
        migrations.CreateModel(
            name='optometryDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PatientId', models.CharField(max_length=50)),
                ('PatientName', models.CharField(max_length=70)),
                ('age', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=50)),
                ('TestDate', models.CharField(max_length=50)),
                ('ReportDate', models.CharField(max_length=50)),
                ('FarVisionRight', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('FarVisionLeft', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('NearVisionRight', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('NearVisionLeft', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('ColorBlindness', models.CharField(blank=True, default=None, max_length=50, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='optoPatientDetails',
        ),
        migrations.DeleteModel(
            name='vitalPatientDetails',
        ),
    ]