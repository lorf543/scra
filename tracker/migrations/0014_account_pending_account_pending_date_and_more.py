# Generated by Django 5.0.4 on 2024-05-19 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0013_account_veteran_duplicates_veteran_pending_account'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='pending',
            field=models.CharField(blank=True, choices=[('pending', 'pending'), ('resolve', 'resolve')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='pending_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='pending_note',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='reason',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='resolve_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='resolve_note',
            field=models.TextField(blank=True, null=True),
        ),
    ]