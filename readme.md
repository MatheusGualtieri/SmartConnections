# SmatConnections
This is a full stack project, with its objective being the management of an user contacts.

# Installation
To install the the project, you must enter both folders(back and front), and use the package manager npm to install it's dependencies.

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

# Configuring Environment Variables
The backend uses 2 Environment Variables, being the DATABASE_URL(used to acces the database) and SECRET_KEY(used to encript passwords).
To configure these variables, create an .env and put this:

```env
DATABASE_URL="postgres://user:password@host:port/db"
SECRET_KEY="YourSecretKey"
```
*An example of the .env is alredy on the back folder

# Running
For runnin the project, just use npm run dev on both folders(back and front)

```bash
npm run dev
```
