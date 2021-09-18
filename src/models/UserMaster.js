import mongoose from "mongoose";

const projectUser = mongoose.Schema ({
    usuario: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    senha: {
        type: String,
        require: true,
    }
})

export default mongoose.model('projectUser', projectUser);