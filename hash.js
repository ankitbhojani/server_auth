const { MD5 } = require('crypto-js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

/* bcrypt.genSalt(10,(err,salt)=>{
    if(err)  return next(err);
    bcrypt.hash('password123',salt,(err,hash)=>{
        if(err){
            return next(err);
        }
     console.log(hash)
    })
}) *//*


const secret = 'mysecretpassword'
const secretsalt = 'bbndbsnfdbdbsjk'
const user = {
    id: 1,
    token: MD5('JKDFSKBJKBJKBSKJBJKDBJKBJKBDJKSBKSBJ BS JDSFBSJ').toString() + secretsalt
}

const recievedToken = '67577b68b13a0531a194d92131310e95bbndbsnfdbdbsjk'

if (recievedToken === user.token) {
    console.log('move forward')
}

console.log(user) */

/* const id = '1000'
const secret = 'supersecret'

const recievedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(recievedToken, secret);
console.log(decodeToken) */