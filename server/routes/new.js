const express = require('express');
const { getMessages, newMessage } = require('../controllers/new');
const router = express.Router();

router.get('/', getMessages);

router.post('/new-message', newMessage);

module.exports = router;