from django.contrib import admin
from .models import Paciente, Medicamento, Receita

admin.site.register(Paciente)
admin.site.register(Medicamento)
admin.site.register(Receita)
