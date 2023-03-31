# Caffeine Army Lojistas

### Getting Started

_Make sure you have docker installed._

Create the **.env** file on project root and include the variables in **.env.example**.

**ALL IS MANDATORY**.

Example:

```bash
POSTGRES_HOST=database
POSTGRES_PORT=5432
POSTGRES_PASSWORD=my_password


FRONTEND_PORT=3000
FRONTEND_API_URL=http://localhost:3333

BACKEND_PORT=3333
BACKEND_JWT_SECRET=my_secret
BACKEND_DATABASE_URL=postgresql://postgres:my_password@database:5432/postgres?schema=public
# To consult the CNPJ an external service is used.
# I recommend this service because it is public and easy.
# Authentication is not required to use this service.
BACKEND_RECEITA_WS_URL=https://receitaws.com.br/v1/cnpj

# I do not recommend changing it because it will be necessary to inform the port for nginx to understand
NGINX_PORT=80
```

### Running the app

Execute the command to up containers:

```bash
$ docker-compose -f docker-compose.yml up -d
```

### 🚀 It's ready!

**Nginx is used in application**

Use / to access frontend

Use /api/ to access backend

Example:

```
http://localhost/ #Access to frontend

http://localhost/api/ #Access to api

```
