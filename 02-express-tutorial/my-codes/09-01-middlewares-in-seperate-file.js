const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user == "habeeb"){
        console.log("Authorized");
        // We can also add the user details in the "req" object 
        // Which can be used in other middlewares
        req.user = {name: "Habeeb", id: 65};

        // We need to send return, otherwise it will send the below response as well
        // Which will cause trouble
        return next();
    }
    res.status(401).send("You are not authorized to access this site!");
}

module.exports = {logger, authorize};