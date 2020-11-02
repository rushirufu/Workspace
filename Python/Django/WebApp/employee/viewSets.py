from rest_framework import viewsets
from models import Employee
from serializer import EmployeeSerializer


class EmpleyeeViewSet(viewsets.ModelViewSet):
    querySet = Employee.objects.all()
    serializer_class = EmployeeSerializer
