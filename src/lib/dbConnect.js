import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  console.log("Connecting to MongoDB")
  if (connection?.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(db,"Connecting to MongoDB")
    connection.isConnected = db.connections[0].readyState;
    // console.log(connection.isConnected);
  } catch (error) {
    console.log("MongoDB connection error: ", error);

    process.exit(1);
  }
}

export default dbConnect;
