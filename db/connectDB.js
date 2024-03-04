import mongoose from "mongoose";
const connectDB = async (DATABASEURL)=>{
    try {
        const DB_OPTION ={
            dbName:'Rashmirajdynamic'
        }
        const dbconnection = await mongoose.connect(DATABASEURL,DB_OPTION)
            console.log('database connected successfully....')
    } catch (error) {
        console.log(error.message)
    }
}   

export default connectDB;