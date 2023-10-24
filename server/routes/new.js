const express = require('express');
const { getMessages, newMessage } = require('../controllers/new');

const router = express.Router();

router.get('/', getMessages);

router.post('/', newMessage);

module.exports = router;