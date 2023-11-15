


import mongoose from "mongoose";



export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connect to db")
    }catch(err){
        console.log(err)
    }
}