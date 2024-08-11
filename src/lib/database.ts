import mongoose from 'mongoose';
const connectDB = async () => {
  try {
        const mongoUri = process.env.MONGODB_URI;
        const dbName = process.env.DB_NAME;
        if (!mongoUri) {
          throw new Error("MONGODB_URI is not defined");
        }
          if (!dbName) {
            throw new Error("DB_NAME is not defined");
          }
        const fullUri = `${mongoUri}/${dbName}`;
    await mongoose.connect(fullUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
export default connectDB;

