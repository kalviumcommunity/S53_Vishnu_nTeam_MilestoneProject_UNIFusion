require("dotenv").config()
const mongoose=require("mongoose")
const mongoURI=process.env.MONGO_URI

const connectDB= async ()=>{
    try{  
        await mongoose.connect(mongoURI)
        console.log("Database have been successfully Connected 🗃")
        

    }catch(error){
        console.log("error:",error)
        console.log("DataBase have Disconnected ,Please check the errors.")        
    }
}



module.exports=connectDB