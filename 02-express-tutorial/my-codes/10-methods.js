const express = require("express");
const {people} = require("./data");
const app = express();


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
app.use(express.json())



app.get("/api/people", (req, res) => {
    res.status(200).json({
        message: "Success",
        data: people
    });
})

// This path should be matched with the html form "action" path
// The HTML form actually sends the data to that path
// So we have to handle it for that path from the server side.
app.post("/login", (req, res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`<h1>Hello ${name}</h1>`);
    }
    res.status(401).send("<h1>Please provide the credentials!!!</h1>");
});

app.post("/api/people", (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({msg: "Please provide the name!"});
    }
    
    res.status(201).json({message: "Success", data: {person: name}});
});

app.post("/api/postman/people", (req, res) => {
    const {name} = req.body;
    if(name){
        people.push({name: name});
        return res.status(200).json({message: "Success", data:people})
    }

    res.status(200).json({message: "Please send a name!"});
});



// Updating a record - PUT method
// Normal convention is, we send key of the data(i.e. id) which is to be updated in params,
// And, by which data it needs to be updated, we send the data in a request body (json)

app.put("/api/people/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    // for(let pep of people){
    //     console.log(pep);
    // }

    // people.forEach(element => {
    //     console.log(element);
    // });
    
    if(people.find((val, i) => val.id == id)){
        for(let pep of people){
            if(pep.id == id){
                pep.name = name;
            }
        }

        return res.status(200).json({success: "false", data: people});
    }

    res.status(404).send({message: `There is no people data present with ID: ${id}.`});
});


// Deleting a record

app.delete("/api/people/:id", (req, res) => {
    const {id} = req.params;


    if(people.find((val) => val.id == id)){
        people.find((val, i) => {
            if(id == val.id){
                people.splice(i, 1);
                return true;
            }
        });
        return res.status(200).json({success: true, data: people})
    }

    res.status(404).json({success: false, data: `There is no people data present with ID: ${id}.`})
});

app.listen(5000, () => {
    console.log("Server listening at port 5000!");
});
