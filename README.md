![POP CHEF LOGO](./public/LOGO_POPCHEF.svg)

# TECHNICAL TEST - FRONTEND

This is project is based on a simple boilerplate for creating APIs with NodeJs express framework.
Here API access token encapsulated/encrypted with JWT token based system.

- Sample API ready for login
- API middlewares for normal user and Admin user
- ES6 import/export available to the user with spread operators
- Deploy your app with cluster (cluster implementation is integrated)
- jest test configured
- add test case for mock database model/functions to test controllers functions

## Getting Started

You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).

```
git clone https://github.com/binitghetiya/express-sequelize-api-boilerplate.git <folder-name>
```

or from **Download Zip**

```
https://github.com/binitghetiya/express-sequelize-api-boilerplate
```

### Project Setup

Once you clone or download project go into you folder

> now cope **.env.local** file to **.env** file

### Installing

```
> npm install or yarn install  (this will install all dependent libraries)
```

### Database Config Setup

Create new database (let's say i'm going to use mysql and my database name is **express-sequelize-api**).
so in my **.env** file will set below parameters.

```
DB_HOST=localhost               # database connection host
DB_USER=root                    # database username
DB_PASS=root                    # database password
DB_NAME=popchef                 # database name
DB_DIALECT=mysql                # database dialect
DB_PORT=3306                    # database port
```

some other inportant parameters/keys in **.env** file

```
HOST=localhost      # application host name
PORT=3000           # application port
SECRET=secret           # secret key for encrypt/decrypt JWT token
```

are you going to user google captcha while register? then also add/update in .env

```
IS_GOOGLE_AUTH_ENABLE=true          # enable google captcha
GOOGLE_CAPTCHA_SECRET_CLIENT=secret
GOOGLE_CAPTCHA_SECRET_SERVER=secret
GOOGLE_CAPTCHA_URL=https://www.google.com/recaptcha/api/siteverify
```

### Migration and Seeders run

After creating database and updating .env file run below commands

```
> make up
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:seed:all
```

Migration will create table users and seed some default users

- **users** - this is normal user table with some required fields like (firstName, lastName, email, password, and isAdmin)
  Seeders will create one new client entry in application and 2 users entry one admin and one normal user.

`npm start` to run your project

> Everythig is setup and you are good to go now. Happy Coding :)

# Other Information about setup/commands

## Useful terminal commands

```
> node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:migrate:undo
> node_modules/.bin/sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
> node_modules/.bin/sequelize seed:generate --name demo-user
```

## Deployment

Project is automatically deploying to Heroku instance when pushing to main branch: https://clucas-popchef-backend.herokuapp.com/

## Git/Bitbucket Setup

```
> rm -rf .git  (Remove git folder so you can use your own git/bitbucket)
```

## Middlewares

```
> ApiAuth this will check user access token that we have return in login response.
> AdminAuth this will check admin auth and it's access.
```

## Routing files

> Currently we have added 3 routing files

```
> public.js   # public routing access everyone can access this APIs
> api.js   # only logged in user/ with vaild token user can access this routes
> admin.js # only admin can access with valid token
```

### API

TODO

### Success Response

```
{
    "success": true,
    "code": 200,
    "data": "object or array"
}
```

### Error Response

```
{
    "success": false,
    "code": 500,
    "errorMessage": "Incorrect Email Id/Password",
    "error": {},
    "data": null
}
```
