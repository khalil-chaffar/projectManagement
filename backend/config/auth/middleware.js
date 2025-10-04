const jwt = require('jsonwebtoken');

const verifyToken =async (req, res, next) => {
    try{
        const decoded = jwt.verify(req.headers.authorization.split('')[1], process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }catch(error){
        res.status(401).send('invalid token');
    }
}

module.exports = { verifyToken };