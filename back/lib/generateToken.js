const jwt           = require('jsonwebtoken');
const config        = require('../config');

const uuid = ()=>{
    let date = new Date().getTime();
    let uuid = 'xxxxxxxx-yxxx-4xxxxxxx-xxxxx-xxxxxxxx'.replace(/[xy]/g, function(u){
        let reg = (date + Math.random()*32)%32 | 0;
        date = Math.floor(date/32);
        return (u === 'x' ? reg: (reg&0x3|0x8)).toString(32);
    });
    return uuid;
};

const generateToken = async(user, password)=>{

    const header = {
        "alg": "HS512",
        "typ": "JWT"
    };

    const payload = {
      user, password
    };

    const token = await jwt.sign(payload, config.jwt.api_key, { algorithm: "HS512" ,expiresIn: (1000*60*60*24)*7});
    return token;
};

module.exports = generateToken;
