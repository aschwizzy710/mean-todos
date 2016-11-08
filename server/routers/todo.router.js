var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/todos', function(req, res){});
router.get('/todos/:id', function(req, res){});
router.post('/todos', function(req, res){
  console.log(req.body);
  var todo = new Todo(req.body);
  todo.save(function(err){
    if(err){
      // throw err; // dont do this for now...
      res.status(500).json({
        err: err
      });
    }
    res.status(201).json({
      msg: 'successfully created todo'
    });
  });
});
router.put('/todos/:id', function(req, res){});
router.delete('/todos/:id', function(req, res){});

module.exports = router;