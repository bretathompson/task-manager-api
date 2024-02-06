const jwt = require('jsonwebtoken')
const User = require('../models/user')
const ObjectId = require("mongodb").ObjectId

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        
        console.log(token);

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).send({ error: 'Invalid token format' });
        }
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'xyz');

        console.log(decoded._id);
        const id = ObjectId(decoded._id);
        const user = await User.findOne({ _id: id });
        console.log(user);
        
        if (!user) {
            throw new Error();
        }
    
        req.token = token;
        req.user = user;
        next();
    } catch (e) {

        console.log(e);

        res.status(401).send({ error: 'Please authenticate' });
    }
    };

module.exports = auth


