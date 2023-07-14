const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome!!!</h1>");
});

app.get("/about", (req, res) => {
    res.status(200).send("<h1>About Page</h1>");
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(5000, () => {
    console.log("Server listening at port 5000");
});