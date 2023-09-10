from django.db.models import fields
from rest_framework import serializers
from .models import Paciente, Medicamento, Receita

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ('id', 'name', 'birth_unix', 'cpf_code')

class MedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicamento
        fields = ('id', 'name', 'category', 'anvisa_code')


class ReceitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receita
        fields = ('id', 'paciente', 'medicamentos')

