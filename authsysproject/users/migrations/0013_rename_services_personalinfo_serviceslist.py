# Generated by Django 4.1.7 on 2023-07-05 09:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0012_personalinfo_services'),
    ]

    operations = [
        migrations.RenameField(
            model_name='personalinfo',
            old_name='services',
            new_name='serviceslist',
        ),
    ]