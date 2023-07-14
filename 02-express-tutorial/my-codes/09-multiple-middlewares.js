const express = require("express");

const {logger, authorize} = require("./middleware")

const app = express();

// This middleware is for all routes
app.use(logger);
// This middleware is for /api routes
app.use("/api", authorize);



app.get("/", (req, res) => {
    res.send("Homepage");
});


app.get("/about", (req, res) => {
    res.send("About Page");
});


// We can add multiple middlewares in the array.
// The middlewares get executes in the order they are given.
// app.get("/api/items", [logger, authorize],(req, res) => {
//     res.send("Items Page");
// });

app.get("/api/products", (req, res) => {
    res.send("Products Page");
    // Accessing the data which we set in the previous middleware
    // Cool feature, isn't?
    console.log(req.user);
});

app.get("/api/items", (req, res) => {
    res.send("Items Page");
});




app.listen(5000, () => {
    console.log("Server listening at port 5000!");
});
