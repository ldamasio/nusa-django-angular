from django.db import models

class Medicamento(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    anvisa_code = models.CharField(max_length=255)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Paciente(models.Model):
    name = models.CharField(max_length=255)
    birth_unix = models.CharField(max_length=255)
    cpf_code = models.CharField(max_length=255)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

class Receita(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    medicamentos = models.ManyToManyField(Medicamento)

    def __str__(self):
        return self.paciente
