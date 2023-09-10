# nusa-django-angular

Para fins deste projeto, subiremos em uma máquina local de desenvolvimento alguns containers: um banco de dados PostgreSQL, uma API e um frontent de um Prontuário Eletrônico para o Paciente - PEP.

Para subir todos os containers:
$ docker compose up -d --build

Para acessar a documentação da API:
http://127.0.0.1:8000/swagger-ui/

# Explicando a arquitetura do software

### backend

A API do prontuário eletrônico é uma aplicação escrita em Python, utilizando o framework Django para construção dos modelos, autenticação com refresh JWT, consulta ao banco de dados e resolução das respostas às requisições envolvendo Pacientes, Medicamentos e Receitas Médicas.

### frontend

A tela para consumir a API consiste em uma Single Page Application, construída sobre o framework Angular.