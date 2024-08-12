const mongoose = require('mongoose');
const logger = require('../common/logger');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dbname', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info('MongoDB connected successfully.');

        // Now require your models after successful connection
        require('../model/employee/employee_model');

    } catch (err) {
        logger.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
