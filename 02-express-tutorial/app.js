const express = require("express");
const {people} = require("./data");
const app = express();

const peopleRouter = require("./routes/peopleRoutes");
const loginRouter = require("./routes/loginRoutes");


// We are using a form built by instructor to perform post operation
app.use(express.static("./methods-public"));

// This code actually allows the body of the req to be enabled in the req object.
// This is only for form data
// So we can able to access it.
// This is the middleware function provided by express.
// In previous express versions, it was using a separate package called "BodyParser" to does this job
// But it's been included in the express itself
app.use(express.urlencoded({extended: false}));

// This is used to make express enable the JSON content
// which is sent in the request
// This parses the JSON data
app.use(express.json());

app.use("/login", loginRouter);
app.use("/api/people", peopleRouter);


app.listen(5000, () => {
    console.log("Server listening at port 5000!");
});
