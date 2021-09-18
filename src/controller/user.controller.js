import jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
import UserMaster from "../models/UserMaster.js";
dotenv.config();

const createMasterUser = async (req, res) => {
    const { usuario, email, senha } = req.body;
    let masterUser = await UserMaster.findOne({ email: email, senha: senha})
    if(masterUser) {
        const token = jwt.sign({ id: masterUser._id }, process.env.JWT_SECRET, { expiresIn: 30 })
        return res.json({ masterUser, authToken: token });
    }
    const newUser = await UserMaster.create({
        usuario, 
        email, 
        senha
    })
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '5d' })
    return res.json({ newUser, authToken: token });
}


export default { createMasterUser };