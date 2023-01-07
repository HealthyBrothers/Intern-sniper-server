# Intern-sniper-server

This repository contains the backend code for the platform. The corresponding frontend repository can be found at the following link: https://github.com/Grapeka/Intern-sniper-client

The frontend repository contains all of the necessary code to build and run the user interface for the platform. It is built using [insert frontend framework] and communicates with the backend API provided by this repository.

# Project Overview

This project is a platform that allows students, directors, companies, and visitors to browse and interact with various educational programs.

The following features are available to users:

Students

- Register and create a user account
- Login and logout of their account
- View a list of available programs
- View their own profile and update their personal information
- Add or remove programs from their favorite list

Directors

- Login and logout of their account
- View a list of available programs
- Validate companies to allow them to list their programs on the platform
- View a list of validation transactions

Companies

- Register and create a user account
- Login and logout of their account
- View a list of available programs
- View their own profile and update their company information
- Create a new program listing on the platform
- View a list of their own programs

Visitors

- Register and create a user account
- View a list of available programs

# Technologies

The following core technologies were used to develop the backend for this platform:

- Node.js: Node.js was used as the JavaScript runtime for building the backend API.
- Express.js: Express.js was used as the web framework for building the API.
- TypeScript: TypeScript was used as a typed superset of JavaScript to build the backend codebase.
- MongoDB: MongoDB was used as the database management system for storing user and program data.

## Getting Started

To get started with the Intern-sniper-server, follow the steps below:

```sh
# Clone the repository to your local machine
git clone https://github.com/Grapeka/Intern-sniper-server.git

# Install the dependencies
yarn install

# Copy the example environment file and update the values as necessary
cp .env.example .env

# Build the project
yarn build

# Start the server
yarn dev
```

You can now access the application at http://localhost:8080
