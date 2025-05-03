import mongoose from "mongoose";

const url = `mongodb+srv://expressproject:JXdqf2cqnB2yWM1D@cluster0.o0efqix.mongodb.net/JobTrackerDB`
export const connectTodb = () =>{
    mongoose.connect(url).then(()=>{
        console.log('db connected');
    }).catch((err)=>{
        console.log('something went wrong while connecting to db');
        console.log(err);
    })
}