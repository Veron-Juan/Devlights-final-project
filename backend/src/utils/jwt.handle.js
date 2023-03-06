import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

const generateToken = (id)=> {
    const jwt = sign({id}, JWT_SECRET);
    return jwt
}

export {generateToken}