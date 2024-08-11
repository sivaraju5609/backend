# My Microservice Project

This project is a Node.js microservice built using Express.js, which provides authentication and assignment management functionalities. The service uses SQLite as its database and is containerized using Docker.

## Table of Contents

1. [Directory Structure](#directory-structure)
2. [Setting Up the Project](#setting-up-the-project)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Running the Project](#running-the-project)
   - [Running Locally](#running-locally)
   - [Using Docker](#using-docker)
4. [API Documentation](#api-documentation)
5. [License](#license)

## Directory Structure

```plaintext
my_project/
├── src/
│   ├── routes/
│   │   ├── auth.js
│   │   └── assignments.js
│   ├── models/
│   │   └── database.js
│   ├── middleware/
│   │   └── authenticateToken.js
│   └── app.js
├── db/
│   └── sqlite.db
├── .env
├── Dockerfile
├── package.json
└── README.md
```

## Setting Up the Project

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root of the project and add your environment variables:

   ```plaintext
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```

4. Initialize the SQLite database:

   If your project includes a database setup script, run it. Otherwise, ensure `sqlite.db` is in the `db` folder and structured correctly.

## Running the Project

### Running Locally

1. Start the server:

   ```bash
   npm start
   ```

2. The application will be available at `http://localhost:3000`.

### Using Docker

1. Build the Docker image:

   ```bash
   docker build -t my_microservice .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 my_microservice
   ```

3. Access the application at `http://localhost:3000`.

## API Documentation

### Authentication Routes (`src/routes/auth.js`)

- **POST /api/auth/login**: Authenticates a user and returns a JWT.

### Assignments Routes (`src/routes/assignments.js`)

- **POST /api/assignments**: Creates a new assignment.
- **GET /api/assignments**: Retrieves all assignments.
- **PUT /api/assignments/:id**: Updates an assignment by ID.
- **DELETE /api/assignments/:id**: Deletes an assignment by ID.

