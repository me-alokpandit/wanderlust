const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data: sampleListings } = require("./data");

// Replace with your MongoDB Atlas connection string
const MONGO_URI = "mongodb+srv://premgupta66540:NiOzwRt6XkCVUZk6@cluster0.igrlojm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB Connected");

    await Listing.deleteMany({});
    console.log("🗑 Existing data cleared");

    await Listing.insertMany(sampleListings);
    console.log("📥 Sample data inserted");

    mongoose.connection.close();
    console.log("🔌 Connection closed");
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  }
}

seedDB();
