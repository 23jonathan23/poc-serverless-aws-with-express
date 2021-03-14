const jwt = require("jsonwebtoken")

const unauthorizedCode = 401;
const sliceToken = 7;

const validateToken = (req, res, next) => {
    let token = req.headers.authorization

    if (!token) {
        return res.status(unauthorizedCode).json({
            message: "Auth token is not supplied"
        })
    }

    if (token && token.startsWith("Bearer ")) {
        token = token.slice(sliceToken, token.length)
    }

    var decoded = jwt.decode(token, { complete: true })
    if (decoded === null || !(validateAudienceAndIssuer(decoded.payload)) || !(validateExpirationTime(decoded.payload))) {
        return res.status(unauthorizedCode).json({
            message: "Auth token is not valid"
        })
    }

    return next()
}

const validateAudienceAndIssuer = (payload) => {
    if (payload.iss !== process.env.JWT_ISSUER || !(payload.aud.includes(process.env.JWT_AUDIENCE))) {
        return false;
    }

    return true;
}

const validateExpirationTime = (payload) => {
    let tokenExpTime = new Date(payload.exp * 1000).getTime()
    let dateTimeNow = new Date().getTime();
    if (tokenExpTime < dateTimeNow) {
        return false;
    }

    return true;
}

module.exports = { validateToken }