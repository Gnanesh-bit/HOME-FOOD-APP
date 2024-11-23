import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gnaneshwarrao78:Gnaneshwar78@cluster0.gxetl.mongodb.net/HOME-FOOD').then(()=>console.log("DB Connected"));
}