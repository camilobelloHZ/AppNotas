import mongoose from "mongoose";


export const connectDB = async () =>{
try {
    await mongoose.connect('mongodb+srv://cbelloh:3003238218@cluster0.xr2xd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(">>> DB is connected")
} catch (error){
    console.log(error);
}

};