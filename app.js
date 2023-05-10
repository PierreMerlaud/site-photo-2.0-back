const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const photoRoutes = require("./Routes/photoRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware

/* This middleware enables Cross-Origin Resource Sharing (CORS) for your application, which allows it to make requests 
to resources hosted on a different domain than the one serving the application.*/
app.use(cors());
/* This middleware logs HTTP requests and responses to the console in a specified format. The 'dev' option specifies 
a pre-defined format that includes information about the request method, URL, status code, response time, and more.*/
app.use(morgan("dev"));
/* This middleware parses incoming requests with JSON payloads and makes the parsed data available in req.body. It allows you to 
easily handle JSON data in your application, such as when submitting data through an HTML form or making API requests with JSON payloads.*/
app.use(express.json());

// Use photo routes
app.use("/api", photoRoutes);

// MongoDB connection
const mongoUri = process.env.MONGO_URI;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// const app = express();

// // mongoose.connect permet ici de se connecter à la base de données locale nommée "essai"
// mongoose.connect("mongodb://localhost:27017/essai");

// app.get("/", (req, res) => {
//   res.json({message : "Hi"});
// });
// app.get("/hello", (req, res) => {
//   res.json({message : "Hello"});
// });
// app.get("/status", (req, res) => {
//     res.status(200).json({message : "200"});
//   });

// app.all("*", function(req, res) {
//     res.send("Page not found");
//   });

// app.listen(5500, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Server has started");
//   });

// process.on("SIGINT", () => {
//     console.log("Shutting down server...");
//     server.close(() => {
//       console.log("Server has been stopped");
//       process.exit();
//     });
//   });
