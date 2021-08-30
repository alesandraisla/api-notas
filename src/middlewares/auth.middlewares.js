import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const { auth } = req.headers;
    if(!auth) return res.status(401).json({message: 'Token não encontrado!'});

    jwt.verify(auth, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(403).json({message: 'Token inválido!'});
        return next();
    } )
}

export default auth;

