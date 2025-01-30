import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import productRoutes from "./routes/productRoutes";

// Configure the DataSource
const dataSource = new DataSource({
  type: "postgres", // Change to your database type (mysql, sqlite, etc.)
  host: "localhost", // Database host
  port: 5432, // Database port
  username: "your-username", // Database username
  password: "your-password", // Database password
  database: "your-database", // Database name
  entities: [/* your entities here */],
  synchronize: true, // Set to false in production
});

const app = express();
app.use(express.json());

dataSource
  .initialize()
  .then(() => {
    console.log("Database connected");

    app.use("/api", productRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Error during DataSource initialization:", error));
