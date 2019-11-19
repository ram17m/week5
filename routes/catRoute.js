'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

/*router.get('/', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });*/
  router.get('/', catController.cat_list_get);
  
  router.get('/:id', (req, res) => {
    res.send('You requested a cat whose id is ' + req.params.id);
  });
  
  router.post('/', (req, res) => {
    res.send('With this endpoint you can add cats.');
  });
  
  router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.');
  });
  
  
  router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.');
  });


  module.exports = router;
