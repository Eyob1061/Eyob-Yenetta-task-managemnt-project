import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const MONGODB_URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.b07srsd.mongodb.net/?retryWrites=true&w=majority`;



export const Connection = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGODB_URL , {useNewUrlParser: true})
    mongoose.connection.on('connected', () => {
        console.log("Database connected succesfully.")
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected.")
    })

    mongoose.connection.on('error', (error) =>{
        console.log("Error while connecting to database:", error.message)
    })
}

export default Connection;