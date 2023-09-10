from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Paciente, Medicamento, Receita

from .serializer import PacienteSerializer, MedicamentoSerializer, ReceitaSerializer
from rest_framework import generics

# from rest_framework import views

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class PacienteList(generics.ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class PacienteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class MedicamentoList(generics.ListCreateAPIView):
    queryset = Medicamento.objects.all()
    serializer_class = MedicamentoSerializer

class MedicamentoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medicamento.objects.all()
    serializer_class = MedicamentoSerializer

class ReceitaList(generics.ListCreateAPIView):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

class ReceitaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer