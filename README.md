# Node.js Express MongoDB CRUD Example with Mongoose

## Overview

This project demonstrates how to create a REST API with Node.js, Express, and MongoDB using Mongoose for CRUD operations. The API allows you to manage employee records with the following endpoints:

### Endpoints

- **GET** `/api/v1/employees`
  - **Description**: Get a list of all employees.

- **GET** `/api/v1/employees/:id`
  - **Description**: Get employee details by ID.
  - **Path Parameter**: `id` - Employee ID

- **POST** `/api/v1/employees`
  - **Description**: Add a new employee.
  - **Request Body**: Employee details in JSON format.

- **PUT** `/api/v1/employees/:id`
  - **Description**: Update an existing employee by ID.
  - **Path Parameter**: `id` - Employee ID
  - **Request Body**: Updated employee details in JSON format.

- **DELETE** `/api/v1/employees/:id`
  - **Description**: Delete an employee by ID.
  - **Path Parameter**: `id` - Employee ID

## Setup

### Prerequisites

- Node.js (>=18.x)
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/your-project.git
    cd your-project
    ```

2. Install the required NPM packages:
    ```bash
    npm install
    ```

3. Configure your MongoDB database by editing the `db_config.js` file. Ensure the connection string points to your MongoDB instance:
    ```javascript
    const connectDB = async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/user', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
            console.log('MongoDB connected successfully.');
        } catch (err) {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Exit the process with failure
        }
    };
    ```

4. Start the MongoDB service (make sure MongoDB is running):
    ```bash
    mongod
    ```

5. Run the application:
    ```bash
    npm start
    ```

## Application Structure

- **`server.js`**: Entry point of the application.
- **`app.js`**: Configures and initializes Express and middleware.
- **`db_config.js`**: Connects to MongoDB and initializes Mongoose.
- **`repository/employee_repo.js`**: Contains CRUD operations for employees.
- **`model/employee_model.js`**: Defines the Mongoose schema and model for employees.
- **`routes/v1/route.js`**: Defines API routes for employee operations.
- **`common/logger.js`**: Logger configuration.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
