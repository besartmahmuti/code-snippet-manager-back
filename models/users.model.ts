import { model, Schema } from "mongoose";

const schema: Schema = new Schema({
    username:{ type: String , required: true, unique: true},
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    full_name: { type: String, required: true },

})
const User = model('users',schema)
export default User