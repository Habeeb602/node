const {people} = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({
        message: "Success",
        data: people
    });
}

const createPerson = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({msg: "Please provide the name!"});
    }
    
    res.status(201).json({message: "Success", data: {person: name}});
}

const createPersonPostman = (req, res) => {
    const {name} = req.body;
    if(name){
        people.push({name: name});
        return res.status(200).json({message: "Success", data:people})
    }

    res.status(200).json({message: "Please send a name!"});
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}