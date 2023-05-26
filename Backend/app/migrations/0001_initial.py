# Generated by Django 4.2.1 on 2023-05-26 14:38

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('category_name', models.CharField(max_length=50)),
                ('category_img', models.ImageField(upload_to='category')),
            ],
            options={
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='CollegeModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('college_name', models.CharField(max_length=50, unique=True)),
                ('icon', models.ImageField(blank=True, null=True, upload_to='college')),
                ('points', models.IntegerField(default=0)),
                ('gs_name', models.CharField(max_length=50)),
                ('gs_number', models.CharField(max_length=14)),
                ('cs_name', models.CharField(max_length=50)),
                ('cs_number', models.CharField(max_length=14)),
                ('scrennshot', models.ImageField(upload_to='payment')),
                ('is_paid', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'college',
            },
        ),
        migrations.CreateModel(
            name='EventModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('event_name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('cover_image', models.ImageField(upload_to='event')),
                ('rules', models.TextField()),
                ('judging_criteria', models.TextField()),
                ('timing', models.DateTimeField()),
                ('venue', models.CharField(max_length=50)),
                ('no_of_participants', models.PositiveSmallIntegerField(default=1)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_category', to='app.categorymodel')),
            ],
            options={
                'db_table': 'event',
            },
        ),
        migrations.CreateModel(
            name='EventParticipantsModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=15)),
                ('id_card', models.ImageField(upload_to='id_card')),
                ('has_attended', models.BooleanField(default=False)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='college_participation', to='app.collegemodel')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_participation', to='app.eventmodel')),
            ],
            options={
                'db_table': 'participant',
            },
        ),
        migrations.CreateModel(
            name='EventCoordinatorModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=14)),
                ('photo', models.ImageField(upload_to='coordinator')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_coordinator', to='app.eventmodel')),
            ],
            options={
                'db_table': 'event-coordinator',
            },
        ),
    ]
