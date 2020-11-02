from employee.models import employee
employee1 = employee(nameOne='Jose', surnameOne='Perez')
employee2 = employee(nameOne='Maria', surnameOne='Davia')
employee3 = employee(nameOne='Pedro', surnameOne='Gutierrez')
employee1.save()
employee2.save()
employee3.save()
