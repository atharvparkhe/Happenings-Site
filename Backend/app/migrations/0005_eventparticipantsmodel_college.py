# Generated by Django 4.2 on 2023-04-29 14:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_eventmodel_timing_eventmodel_venue'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventparticipantsmodel',
            name='college',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='college_participation', to='app.collegemodel'),
            preserve_default=False,
        ),
    ]