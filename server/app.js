const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Account = require('./models/accounts');
require('dotenv').config()

const app = express();

app.use(cors())

const db = process.env.CONNECTION_STRING
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('Connected to DB'))
    .catch(err => console.error(err))

app.get('/accounts', (req, res) => {
    Account.find()
        .then(accounts => res.status(200).json(accounts))
        .catch(err => res.send(500).json(err))
})

app.get('/accounts/:id', (req, res) => {
    Account.findOne({ _id: req.params.id })
        .then((account) => res.status(200).json(account))
        .catch(err => res.status(404).json(err))
})

app.listen(5000, (error) => {
    error ? console.error(error) : console.log('listening...')
})