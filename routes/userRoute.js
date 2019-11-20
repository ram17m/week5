'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/*router.get('/', (req, res) => {
    res.send('With this endpoint you can get users.');
  });*/

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', userController.user_create_post);

router.put('/', (req, res) => {
    res.send('With this endpoint you can modify users.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete users.');
});

module.exports = router;
