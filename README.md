# Gelsin

This repo was created to practice `express`, `MongoDB`, `mongoose`, `jsonwebtoken`, `morgan`, `murter`, `nodemailer` and any other packages or technologies. 

## API Endpoints

### Notes

Please be sure, you preceded all APIs with `/api/v1`.

### Auth

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /sign-up | `POST` | `{ "email": "jone@doe.com", "password": "pass1234", "passwordConfirm": "pass1234", "firstName": "Jone", "lastName": "Doe" }` | Empty | Returns authentication bearer token and user data on body |
| /log-in | `POST` | `{ "email": "jone@doe.com", "password": "pass1234" }` | Empty | Returns authentication bearer token and user data on body |
| /update-password | `POST` | `{ "currentPassword": "pass1234", "password": "newpassword", "passwordConfirm": "newpassword"}` | Authentication: Bearer Token | Returns authentication bearer token and user data on body |
| /forgot-password | `POST` | `{ "email": "jone@doe.com" }` | Empty | Sends an email with password reset link to the given email if it's existent |
| /reset-password | `POST` | `{ "password": "pass1234", "passwordConfirm": "pass1234" }` | Empty | Returns authentication bearer token and user data on body |

### Users

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /users/me | `GET` | Empty | Authentication: Bearer Token | Returns user data on body |
| /users/me/addresses | `POST` | ` "label": "Work", "street": "Fifth Avenue", "city": "New York", "province": "New York", "zip": 10036, "country": "USA" }` | Authentication: Bearer Token | Returns user data on body |
| /users/me/addresses/:id | `PATCH` | ` "label": "Work", "street": "Fifth Avenue", "city": "New York", "province": "New York", "zip": 10036, "country": "USA" }` | Authentication: Bearer Token | Returns user data on body |
| /users/me/addresses/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |
| /users | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /users | `POST` | `{ "email": "jone@doe.com", "password": "pass1234", "passwordConfirm": "pass1234", "role": "user" }` | Authentication: Bearer Token | Returns created resource or error message |
| /users/:id | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /users/:id | `PATCH` | `{ "email": "jone@doe.com", "password": "pass1234", "passwordConfirm": "pass1234", "role": "user" }` | Authentication: Bearer Token | Returns updated resource or error message |
| /users/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |

### Products
| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /products | `GET` | Empty | Empty | Returns resource |
| /products | `POST` | `{ "name": "Barilla", "category": "Food", "subCategory": "Pasta", "entityPrice": 6, "entityPriceCurrency": "TRY", "entityAmount": 300, "entityAmountUnit": "g" }`| Authentication: Bearer Token | Returns created resource or error message |
| /products/:id | `GET` | Empty | Empty | Returns resource |
| /products/:id | `PATCH` | `{ "name": "Barilla", "category": "Food", "subCategory": "Pasta", "entityPrice": 6, "entityPriceCurrency": "TRY", "entityAmount": 300, "entityAmountUnit": "g" }` | Authentication: Bearer Token | Returns updated resource or error message |`
| /products/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |
| /products/:id/comments | `GET` | Empty | Empty | Returns resource |
| /products/:id/comments | `POST` | `{ "title": "About Tea", "body": "It's very economic.", "rating": 1 }` | Authentication: Bearer Token | Returns created resource or error message |
| /products/:id/comments/:id | `GET` | Empty | Empty | Returns resource |
| /products/:id/comments/:id | `PATCH` | `{ "title": "About Tea", "body": "It's very economic.", "rating": 1 }` | Authentication: Bearer Token | Returns updated resource or error message |
| /products/:id/comments/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |

#### Notes

- If you perform a `POST` request to any endpoint, you have to provide the exact same data keys as shown above on a request body.
- If you perform a `PATCH` request to any endpoint, you can provide one of the keys that is shown above.

## .env

An .env file should consist of:

    APP_PORT

    DB_HOST
    DB_PORT
    DB_NAME

    JWT_SECRET_KEY
    JWT_EXPIRES_IN

    EMAIL_HOST
    EMAIL_PORT
    EMAIL_USER
    EMAIL_PASS

## Installation

Clone the source code:

    git clone git@github.com:toptaskalender/gelsin.git

Install dependencies:

    npm install

## Starting the app

Run `npm start` to start the application.