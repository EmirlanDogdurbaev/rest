# Generated by Django 4.1.4 on 2022-12-10 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='price',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
