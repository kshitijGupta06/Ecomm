import "reflect-metadata"; // Required for decorators to work
import express from "express";
import { AppDataSource } from "./data-source"; // Import the data source
import productRoutes from "./routes/productRoutes";

const app = express();
app.use(express.json());

// Initialize the data source and connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.use("/api", productRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during DataSource initialization", error);
  });
