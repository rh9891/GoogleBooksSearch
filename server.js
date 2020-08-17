// Pulls in the required dependencies.
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config();

// Establishes a PORT to be used when running the application locally or for deployment.
const PORT = process.env.PORT || 3001;

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connection to the MongoDB.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Static files that will be used upon deployment to Heroku.
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Set up the server.
app.listen(PORT, function() {
    console.log(`Server is now listening on PORT ${PORT}...`);
});