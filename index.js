const express = require("express");
const connectToMongo = require("./config/db");
const cors = require("cors");
const galleryRoutes = require("./routes/gallery");
const path = require("path");
require("dotenv").config()

const app = express();

// API Routes
app.use(cors());
app.use(express.json());

app.use("/api/v1", galleryRoutes);

// Serve static files from the "public/upload" directory
app.use("/uploads", express.static(path.join(__dirname, "public/upload")));

const PORT = process.env.PORT || 8000;

connectToMongo();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
