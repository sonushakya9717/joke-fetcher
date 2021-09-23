## Joke Fetcher


## Installation

Install and Run my-project in your device 

Clone 'joke-fetcher' repository from GitHub


## Open Command line and run the given Commands

```bash
  git clone https://github.com/sonushakya9717/joke-fetcher.git
```
or
```bash
  git clone git@github.com:sonushakya9717/joke-fetcher.git
```
```bash
  cd joke-fetcher
```

```bash
  npm i
```

#### make .env file with the following keys in the root directory
```
username=DatabaseName
```
```
password=Database Password
```
```
jwtsecret=Any text you want to have as a jwt secret key
```
#### create config.json file in the config folder and write the given things.

{
  "development": {
    "username": "root",
    "password": "null",
    "database": "users_data",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}


## Database Setup

#### Open your Command line and run the following Commands :

```bash
sudo -i -u postgres
```

```bash
  CREATE USER username WITH PASSWORD password;
```
create a database with database name users_data

```bash
  CREATE DATABASE users_data
```

Run the following Commands in the root directory of joke-fetcher


```bash
  npx sequelize-cli db:migrate
```

Run 
```bash
  npm start
```

#### You can see Server running with some text given below:

Server is running at port 4000

Executing (default): SELECT 1+1 AS result

Connection has been established successfully.


Postman Collections: https://www.getpostman.com/collections/55ac61df92eb47ec7411