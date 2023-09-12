from django.db.models import fields
from rest_framework import serializers
from .models import Paciente, Medicamento, Receita

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ('id', 'name', 'birth', 'cpf_code', 'created_at')

class MedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicamento
        fields = ('id', 'name', 'category', 'anvisa_code', 'created_at')


class ReceitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receita
        fields = ('id', 'paciente', 'medicamentos', 'created_at')

