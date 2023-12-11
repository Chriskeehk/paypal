import express from "express";
//const express = require('express');

const app = express();

app.get('/api2', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
})

app.get('/api2/profile', (req, res) => {
    
    res.send('This is profile');
})

app.get('/api2/profile2', (req, res) => {
    
    res.send('This is profile2');
})


app.listen(3000);

