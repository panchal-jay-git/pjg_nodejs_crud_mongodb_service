const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');

// Configuration for log file and directory
const logDirectory = path.resolve('logs');
const logFile = path.join(logDirectory, 'app.log');

// Ensure the log directory exists
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
}

// Create a Bunyan logger instance
const logger = bunyan.createLogger({
    name: 'myapp',
    level: 'debug', // Change this to 'info' or 'error' as needed
    streams: [
        {
            level: 'debug',
            stream: process.stdout, // Log to console
        },
        {
            level: 'info',
            path: logFile, // Log to file
        }
    ],
    serializers: {
        err: bunyan.stdSerializers.err // Include standard error serializer
    }
});

// Export the logger instance for use in other modules
module.exports = logger;
