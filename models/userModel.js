import mongoose from "mongoose";

//Create table into DB
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
    },
    {
        timestamps: true, //add date
    }
);

const User = mongoose.model('User', UserSchema);
export default User;