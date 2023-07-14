const express = require("express");
const app = express()
const {products} = require("./data")

const homePage = `
<h1>Homepage</h1>
<a href="/api/products">Products</a>
`


app.get("/", (req, res) => {
    res.send(homePage);
}); 

app.get("/api/products", (req, res) => {
    
    const newProduct  = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });

    res.json(newProduct);
});

// we need to use : before params. this is called params, actually parameter which is passed by user
// we will get that in the request object with the same name :<name-given> 
app.get("/api/products/:productID", (req, res) => {
    const ID = req.params.productID;
    const reqProduct = products.find((product) => product.id == ID);
    if(!reqProduct){
        return res.status(200).send("Product doesn't exist!")
    }
    res.json(reqProduct);
});

// This is an example for parameters - how we will get the info in the request if we have too many params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send("Hello, welcome to reviews page.")
})


app.get("/api/v1/items", (req, res) => {
    console.log(req.query);
    const {search, limit} = req.query;
    let sortedItems = [...products];

    if(search !== undefined){
        sortedItems = sortedItems.filter((item) => item.name.startsWith(search));
    }

    if(limit !== undefined){
        sortedItems = sortedItems.slice(0, Number(limit));
    }
    
    if(sortedItems.length === 0){
        // We are writing "return", since a request can have only one response, in all cases.
        // If we didn't write "return" while sending response, it will continue the execution
        // And it will send the last res.send() as well.
        return res.status(200).send("No product matched your search specification")
    }

    res.json(sortedItems);
});

app.listen(5000, () => {
    console.log("Server listening at port 5000!");
});