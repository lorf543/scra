# Generated by Django 5.0.4 on 2024-05-19 13:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0015_alter_account_pending_date_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Pending_account',
        ),
    ]
