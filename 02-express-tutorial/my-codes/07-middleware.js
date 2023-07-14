const express = require("express");
const app = express();

// This is how middleware works, whenever an request being sent to a server
// req -> middleware -> res

const logger = (req, res, next) => {
    // Expressjs uses middleware heavily
    // Almost everything, that we do between a request and a response is a middleware ops.
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // All the middleware either has to send a response or send the control to the next middleware/function
    // If it send an response by itself, it will break the cycle of the next middleware
    // If it sends the control to next, it will not break/affect the further cycle of middlewares
    // res.send("Middleware here!");
    next();
}

// We have to pass the middleware between the route and callback function, hence it's called middleware ;)
// Express will send the (req, res, next) implicitly to middleware method.
app.get("/", logger, (req, res) => {
    res.send("Homepage");
});

app.get("/about", logger, (req, res) => {
    res.send("About Page");
});

app.listen(5000, () => {
    console.log("Server listening at port 5000!");
});