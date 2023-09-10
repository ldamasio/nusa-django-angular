from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from . import views

urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('pacientes/', views.PacienteList.as_view(), name='view_all_patients'),
    path('paciente/<int:pk>/', views.PacienteDetail.as_view(), name='view_patient_details'),
    path('medicamentos/', views.MedicamentoList.as_view(), name='view_all_drugs'),
    path('medicamento/<int:pk>/', views.MedicamentoDetail.as_view(), name='view_drug_details'),
    path('receitas/', views.ReceitaList.as_view(), name='view_all_prescriptions'),
    path('receita/<int:pk>/', views.ReceitaDetail.as_view(), name='view_prescription_details'),

]
