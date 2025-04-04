import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {expiresIn: '15d'});

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // in milliseconds
        httpOnly: true, // make sure that this cookie is only available via the browser and prevent XSS attacks
        sameSite: "strict", // CSRF attacks cross-site forgery attacks
        secure: ENV_VARS.NODE_ENV !== "development",
    });

    return token;
}