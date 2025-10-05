import mongoose from "mongoose";

const connectDB = async () => {
    console.log('Connecting to MongoDB URL:', process.env.MONGODB_URL); // Debug line

    mongoose.connection.on('connected', () => {
        console.log("✅ Database Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/imagify`);
};

export default connectDB;
