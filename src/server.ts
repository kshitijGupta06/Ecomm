import express from "express";
import productRoutes from "./routes/productRoutes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());
app.use("/api", productRoutes);

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("Database connection error:", error));
