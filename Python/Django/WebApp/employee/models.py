from django.db import models

# Create your models here.


class employee(models.Model):
    nameOne = models.CharField(max_length=20)
    nameTwo = models.CharField(max_length=20)
    nameThere = models.CharField(max_length=20)
    surnameOne = models.CharField(max_length=20)
    surnameTwo = models.CharField(max_length=20)
    surnameThere = models.CharField(max_length=20)
