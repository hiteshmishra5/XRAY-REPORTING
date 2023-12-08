# Generated by Django 4.2.7 on 2023-11-25 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0022_optometrydetails_delete_optopatientdetails_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='optopatientDetails',
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
        migrations.CreateModel(
            name='vitalPatientDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PatientId', models.CharField(max_length=50)),
                ('PatientName', models.CharField(max_length=70)),
                ('age', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=50)),
                ('TestDate', models.CharField(max_length=50)),
                ('ReportDate', models.CharField(max_length=50)),
                ('height', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('weight', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('blood', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('pulse', models.CharField(blank=True, default=None, max_length=50, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='optometryDetails',
        ),
    ]
