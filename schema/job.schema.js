import mongoose from "mongoose";


export const jobSchema = mongoose.Schema({
    company:{type:String},
    result:{type:String,default:'applied',enum:['applied','Interview pending','rejected','Assignment Pending','Result Pending']},
    data:{type:Date, default:Date.now()},
 
})