### Backend Booking Clinic using NestJS

_Documentation by Romi Julianto_

## Run Server

```bash
- npm run start:dev
```
## Installation

```bash
- npm i -g @nestjs/cli
- nest new nest-sequelize-simple-api
- npm install -g sequelize
- npm install --save sequelize sequelize-typescript mysql2
- npm install --save-dev @types/sequelize
- npm install dotenv --save
- npm i --save @nestjs/config
- npm install --save @nestjs/passport passport passport-local
- npm install --save-dev @types/passport-local
- npm install bcrypt --save
- npm install @nestjs/jwt passport-jwt
- npm install @types/passport-jwt --save-dev
- npm i class-validator class-transformer --save
- npm i --save class-validator class-transformer
```

## Generate Module NestJS

```bash
- nest generate module core/database
- nest generate module modules/apps/users
- nest generate service modules/apps/users
- nest generate module modules/apps/auth
- nest generate service modules/apps/auth
- nest g co modules/apps/auth
- nest g module modules/cms/clinics
- nest g service modules/cms/clinics
- nest g controller modules/cms/clinics
- nest g module modules/cms/clinics_tes
- nest g service modules/cms/clinics_tes
- nest g controller modules/cms/clinics_tes
- nest g module modules/cms/clinics_tes
- nest g service modules/cms/clinics_tes
- nest g controller modules/cms/clinics_tes
```
## Run Request in PostMan
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d580677eaec68d04a665?action=collection%2Fimport)
### Referensi

- [How to Build Web APIs with NestJS, Postgres, and Sequelize - A Beginner's Guide](https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/)
