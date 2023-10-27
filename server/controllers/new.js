const express = require('express');
const Message = require('../models/Message');

const getMessages = (req, res) => {
    res.json({
        msg: 'Lista de mensajes que SIRVE'
    });
};

const newMessage = async (req, res) => {
    try {
        const { username, text } = req.body;
        const newMessage = {
            username,
            text
        };
        const messageDB = new Message(newMessage);
        await messageDB.save();
        res.status(201).json({
            msg: 'Created new message',
            messageDB
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error',
            error
        });
    }
};

module.exports = {
    getMessages,
    newMessage
};