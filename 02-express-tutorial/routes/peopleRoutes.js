const express = require("express");
const {people} = require("../data");
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require("../controllers/people");

router.get("/", getPeople);

// This path should be matched with the html form "action" path
// The HTML form actually sends the data to that path
// So we have to handle it for that path from the server side.

router.post("/", createPerson);
router.post("/postman", createPersonPostman);

// Updating a record - PUT method
// Normal convention is, we send key of the data(i.e. id) which is to be updated in params,
// And, by which data it needs to be updated, we send the data in a request body (json)
router.put("/:id", updatePerson);

// Deleting a record
router.delete("/:id", deletePerson);


//We can also chain the methods which are having same paths
/*
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);
*/


module.exports = router;