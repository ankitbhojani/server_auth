const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const { User } = require('./models/user');
const { auth } = require('./middleware/auth')
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/auth');
app.use(bodyParser.json())
app.use(cookieParser());

app.post('/api/user', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save((err, doc) => {
        if (err) {
            return res.status(400).send(err)
        }
        return res.status(200).send(doc)
    })
})

app.post('/api/user/login', (req, res) => {
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if (err) throw err;
        if (!user) res.json({ message: 'Auth failed,user not found' })
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;

            if (!isMatch) return res.status(400).json({
                message: 'Wrong password'
            });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('auth', user.token).send('ok');
            })
        })
    })
})

app.get('/user/profile', auth, (req, res) => {
    res.status(200).send(req.token)
})

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Started on Port ${port}`);
})