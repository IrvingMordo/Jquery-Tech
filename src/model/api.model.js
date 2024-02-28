import { Schema, model } from "mongoose";

const smartSchema = new Schema({
    id: {
      type: String, 
      unique: true, 
      required: true 
    }, 
    description: String, 
    brand: String,
    model: String,  
    color: String, 
    size: String,
    affair: String, 
    status: Number
  },
  {
    versionKey: false, 
    timestamps: true
  }); 
  
  export default model('Smart', smartSchema); 
  