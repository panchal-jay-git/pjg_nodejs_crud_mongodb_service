// app.js
const express = require('express');
const connectDB = require('./repository/db_config');
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/v1/route");
const logger = require('./common/logger');

process.on("uncaughtException", (e) => {
    logger.error(e);
});

const app = express();

const initializeApp = async () => {
    try {
        // Wait for MongoDB connection to establish before proceeding
        await connectDB();

        app.disable("x-powered-by");

        app.use(bodyParser.json({ limit: "10mb" }));
        app.use(
            bodyParser.urlencoded({
                limit: "10mb",
                extended: true,
                parameterLimit: 50000,
            })
        );
        app.use(cors());

        // Routes
        app.use("/api/v1", routes);

        // catch 404 and forward to error handler
        app.use((req, res, next) => {
            res.status(404).send({ message: "Resource not found" });
        });

        // Middleware Error Handler
        app.use((err, req, res, next) => {
            logger.error("Error:", err);

            if (process.env.NODE_ENV === "development") {
                res.status(500).send({ error: err.message, stack: err.stack });
            } else {
                res.status(500).send({ error: "Internal Server Error" });
            }
        });
    } catch (err) {
        logger.error('Failed to initialize the app:', err);
        process.exit(1); // Exit the process with failure
    }
};

initializeApp();

module.exports = app;
