const express = require("express");
const path = require("path");
const app = express();


// This is how we inform express to takecare of the static files
// While using HTTP module, we have to give each and every static files in a path and
// we need to set the content-type for each one of them
// In express, it's simpler.
// To use static files such as css, svg, or front-end js files, we need to put the in a common folder 
// usually named as public and the express will take care of them.
// app.use is used for setting-up static files and middlewares.
// The server addresses or path might change but these static files, which we stored in the deployed server -
// - isn't going to change. So, we are giving the files as this.

// And also, while adding javascript into public, with dynamic changes in the page (eg: different username for different user)
// like Welcome Habeeb
// like Welcome ${username}
// we use template engine SSR(Server-side rendering) to make it possible.
app.use(express.static("./public"))


app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve("./navbar-app/index.html"));
})

app.all("*", (req, res) => {
    res.status(404).send("Page not found!");
}); 


app.listen(5000, () => {
    console.log("Server is listening at port 5000")
});