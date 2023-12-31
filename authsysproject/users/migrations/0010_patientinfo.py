# Generated by Django 4.1.7 on 2023-06-07 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_alter_personalinfo_companylogo_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PatientInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PatientId', models.CharField(max_length=15)),
                ('PatientName', models.CharField(max_length=30)),
                ('age', models.CharField(max_length=30)),
                ('gender', models.CharField(max_length=15)),
                ('TestDate', models.CharField(max_length=20)),
                ('ReportDate', models.CharField(max_length=20)),
            ],
        ),
    ]
