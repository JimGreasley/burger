const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  //console.log(req.body);     
  //console.log("rb_bn: ", req.body.burger_name, " rb.dev: ", req.body.devoured);
  burger.create(
//      ["burger_name", "devoured"],
//      [req.body.burger_name, req.body.devoured],
      ["burger_name"],
      [req.body.burger_name],
   function(result) {
      // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  //var col_val = "devour = true";
  //console.log("req.body:", req.body);
  //console.log("condition", condition);

  burger.update({devoured: 'true'},
     condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
