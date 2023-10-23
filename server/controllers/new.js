const express = require('express');

const getMessages = (req, res)=>{
    res.json({
        msg: 'Lista de mensajes'
    })
}
const newMessage = (req, res)=> {
    res.json({
        msg: 'Nuevo mensaje'
    })
}
module.exports = {
    getMessages,
    newMessage
};