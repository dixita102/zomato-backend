import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sathwiksai:satwiksai@cluster0.tf9hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/feasto').then(()=>console.log("DB CONNECTED"));
}