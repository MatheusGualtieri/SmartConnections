# SmatConnections
Este é um projeto full stack, tendo como objetivo a gestão dos contatos de um usuário.

# Installation
Para instalar o projeto, você deve inserir as duas pastas (back e front) e usar o gerenciador de pacotes npm para instalar suas dependências.

Back
```bash
cd back
npm install
```

Front
```bash
cd front
npm install
```

#Variáveis de Ambiente
O backend utiliza 2 variáveis ​​de ambiente, sendo DATABASE_URL (usada para acessar o banco de dados) e SECRET_KEY (usada para criptografar senhas).
Para configurar essas variáveis, crie um .env e coloque isto:

```env
DATABASE_URL="postgres://user:password@host:port/db"
SECRET_KEY="YourSecretKey"
```
*Um exemplo do .env já está na pasta back

#Rodar
Para executar o projeto, basta usar npm run dev em ambas as pastas(back and front)

```bash
npm run dev
```
# Documentação
Você pode acessar a documentação da API após executar o backend, sendo http://localhost:3000/docs
