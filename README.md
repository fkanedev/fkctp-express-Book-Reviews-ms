![Node.js](https://img.shields.io/badge/Node.js-v16.3.0-green.svg)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue.svg)
![JWT Authentication](https://img.shields.io/badge/Authentication-JWT-brightgreen.svg)
![Session Management](https://img.shields.io/badge/Session%20Management-Express%20Session-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Book Reviews Microservice Project

This project involves developing a microservice for managing book reviews and implementing CRUD endpoints. It demonstrates the practical application of Express.js in a real-world scenario. It's part of my training in the [IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer), utilizing a [template](https://github.com/ibm-developer-skills-network/expressBookReviews) provided by IBM Developer Skills Network.

# Topics

`Node.js`, `Express.js`, `JWT`, `Session Management`, `Microservices`, `CRUD`, `API`, `JavaScript`, `MIT License`, `IBM Full Stack Software Developer Professional Certificate`

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Installation and Configuration](#installation-configuration)
4. [Usage](#usage)
5. [Development](#development)
6. [Sources](#sources)
7. [License](#license)
8. [Contact](#contact)

## 1. Introduction <a name="introduction"></a>

### Project Objective:
The main objective of this project is to create a microservice for managing book reviews and implementing CRUD (Create, Read, Update, Delete) endpoints using Express.js. This microservice is designed to handle user authentication and authorization using JWT tokens and session management.
### Key Features:
- Manage book reviews with CRUD operations.
- User authentication and session management using JWT.
- Separate routes for public and authenticated users.
- Asynchronous operations with Promises for database interactions.

## 2. Technologies Used <a name="technologies-used"></a>

### Programming Languages:
- JavaScript (Node.js)

### Tools and Frameworks:
- Express.js 4.x: A web application framework for Node.js.
- JWT (jsonwebtoken): For handling authentication tokens.
- Express Session: For session management.

## 3. Installation and Configuration <a name="installation-configuration"></a>

### Prerequisites:
Node.js and npm installed on your system.

### Installation Steps:
1. Clone the GitHub repository:
    ```bash
    git clone https://github.com/fkanedev/fkctp-express-Book-Reviews-ms
    cd fkctp-express-Book-Reviews-ms
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

### Environment Configuration:
Ensure the environment is properly set up. You can create a .env file to manage environment variables.

## 4. Usage <a name="usage"></a>

### Running the Application:
To start the application, use the following command:
```bash
    npm start
```

### Use Case Examples:
- Register a new user:
  ```bash
    curl --request POST -i -w '\n' --url http://localhost:5000/register --header 'Content-Type: application/json' --data '{"username":"user1","password":"password1"}'
  ```
- Login as a registered user:
  ```bash
    curl --request POST -i -w '\n' --url http://localhost:5000/customer/login --header 'Content-Type: application/json' --data '{"username":"user1","password":"password1"}'
  ```
- Add a new review for a book (authenticated route):
  ```bash
    curl --request PUT -i -w '\n' --url http://localhost:5000/customer/auth/review/978-0385474542 --header 'Content-Type: application/json' --header 'Authorization: Bearer <token>' --data '{"review":"Great book!"}'
  ```
- Delete a review for a book (authenticated route):
  ```bash
    curl --request DELETE -i -w '\n' --url http://localhost:5000/customer/auth/review/978-0385474542 --header 'Content-Type: application/json' --header 'Authorization: Bearer <token>'
  ```
## 5. Development <a name="development"></a>

### Project Structure:
The backend project is organized around the Express framework. The directory structure includes the following folders:

- final_project/: Contains the core of the microservice.
  - router/: Contains the route definitions.
    - auth_users.js: Handles authenticated user routes.
    - booksdb.js: Simulates the book database.
    - general.js: Handles public routes.
    - index.js: Main entry point of the application.endpoints.

```plaintext
.
├── final_project/
│   └── router/
│       ├── auth_users.js
│       ├── booksdb.js
│       ├── general.js
│   ├── index.js
│   ├── package.json
│   └── ...
├── LICENSE
├── README.md
└── ...
```
### Data Model:
The data model for this project includes the following fields for a book:

- id: Unique identifier for the book.
- title: Title of the book.
- author: Author of the book.
- isbn: International Standard Book Number.
- reviews: An object containing user reviews keyed by username.

## 6. Sources <a name="sources"></a>

- **Template: [IBM Developer Skills Network - Book Reviews service template](https://github.com/ibm-developer-skills-network/expressBookReviews)**

- **Useful links**:
  - **[Developing Back-End Apps with Node.js and Express](https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express/home/week/4)**
  - **[IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer)**

## 7. License <a name="license"></a>

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## 8. Contact <a name="contact"></a>

### Contact Information :

- Send me email : **fkanecloudtech@gmail.com**
- Connect with me on [LinkedIn](https://www.linkedin.com/in/fkanecloudtech/)
- Visit my [portfolio](https://fkanedev.github.io) to explore my projects and services.


### Contribution and Support :

Contributions are welcome. Please refer to the [CONTRIBUTING](/CONTRIBUTING) file for more information on how to contribute.
