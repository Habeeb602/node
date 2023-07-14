const express = require("express");
const app = express();
const logger = require("./middleware");

// Instead of passing the middleware function in every request handler
// We can make use of app.use(<middleware-function>)
// app.use() takes a middleware function as an argument
// we can also specify the path, e.g: if the route starts with "/api/" the use this logger
// Syntax: app.use(path:optional, middleware-function:required);
app.use("/api",logger);

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/api/products", (req, res) => {
    res.send("Products Page");
});

app.get("/api/items", (req, res) => {
    res.send("Items Page");
});

app.listen(5000, () => {
    console.log("Server listening at port 5000!");
});