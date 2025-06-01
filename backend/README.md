# Backend - Interview Fullstack

This README will help you bootstrap and run the backend for this project.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [yarn](https://yarnpkg.com/) (package manager)
- [Prisma](https://www.prisma.io/docs/) (see documentation for setup)

## Setup

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Configure environment variables**

   - Copy the example environment file if provided:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` to set up your local configuration (database URL, ports, secrets, etc).

3. **Database setup (SQLite)**

   - Generate the Prisma client:
     ```bash
     yarn prisma:generate
     ```
   - Push the Prisma schema to the SQLite database:
     ```bash
     yarn prisma:push
     ```
   - Seed the database with initial data:
     ```bash
     yarn prisma:seed
     ```

Anything prisma related (database, seed and schema) are provided in the `./prisma` folder.

## Running the Backend

  ```bash
  yarn start
  ```

The backend should now be running, typically on [http://localhost:3000](http://localhost:3000) (check your `.env` for the actual port).


## Useful Scripts

- `yarn lint` - Lint the codebase
- `yarn build` - Build the project

## Troubleshooting

- Ensure all environment variables are set correctly.
- Check logs for errors if the server does not start.

## Contact

If you have any questions, feel free to reach out!

Happy coding!

