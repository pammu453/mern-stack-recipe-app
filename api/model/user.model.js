import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    displayName: String,
    photoURL: String,
    email: {
        type: String,
        unique:true,
        required:true
    },
    coin: {
        type: Number,
        default: 50
    }
});

const User = mongoose.model('User', UserSchema);

export default User;