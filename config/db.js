import mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const dbconnect = async ()=>{
    mongoose.set('strictQuery', false);
    try {        
        const conn = await mongoose.connect(process.env.MONGO_URL)           
        console.log("database is connected ")
    } catch (error) {
        console.log(error)
    process.exit(1)
    }
}


export {dbconnect}