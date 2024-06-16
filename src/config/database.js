import mongoose from "mongoose";

const urlDb =
  process.env.MONGO_URI || "mongodb+srv://valebutrico:wwEb3KHzRJKd3RLW@e-commerce.cf53dma.mongodb.net/ecommerce";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(urlDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
