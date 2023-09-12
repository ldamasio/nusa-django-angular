from django.db import models

class Medicamento(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    anvisa_code = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Paciente(models.Model):
    name = models.CharField(max_length=255)
    birth = models.DateField(max_length=8)
    cpf_code = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Receita(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    medicamentos = models.ManyToManyField(Medicamento)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.paciente.name + " - " + str(self.created_at)
