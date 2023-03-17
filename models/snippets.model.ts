import { model, Schema } from "mongoose";

const schema: Schema = new Schema({
    title:{ type: String , required: true, unique: true},
    language: { type: String, required: true, lowercase: true },
    code: { type: String, required: true },
   

})
const Snippet = model('snippets',schema)
export default Snippet