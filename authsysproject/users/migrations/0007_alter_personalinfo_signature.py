# Generated by Django 4.0.5 on 2022-09-05 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_workexp_designation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personalinfo',
            name='signature',
            field=models.FileField(default=None, null=True, upload_to='media'),
        ),
    ]
