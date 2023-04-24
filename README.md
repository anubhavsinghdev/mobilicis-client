# Mobilicis

## Project Description:

This is a Node.js and Express based backend application that provides RESTful APIs to fetch user data from MongoDB. The application uses mongoose to interact with MongoDB. The project also includes a Next frontend that consumes the APIs to display data in a tabular format.

## APIs:

POST `/api/users/importdata` - API to import sample data from sample_data.json file to MongoDB.

GET `/api/users/income-lt-5-bmw-merc` - API to fetch users whose income is less than $5 USD and who have a car of brand "BMW" or "Mercedes".

GET `/api/users/male-phone-price-gt-10000` - API to fetch male users whose phone price is greater than 10,000.

GET `/api/users/last-name-M-quote-gt-15-email-in` - API to fetch users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name.

GET `/api/users/bmw-merc-audi-email-no-digit` - API to fetch users who have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit.

GET `/api/users/top-10-cities-highest-users-avg-income` - API to fetch the data of top 10 cities which have the highest number of users and their average income.

GET `/api/users/all-users` - API to fetch all users from MongoDB.

## Technologies:

- Node.js
- Express.js
- MongoDB
- NextJS

### Host URL Frontend: https://mobilis-client.vercel.app

### Host URL Backend: https://good-lime-pelican-kilt.cyclic.app
