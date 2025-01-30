import { DataSource } from "typeorm";
import { Product } from "./entity/Product"; // Ensure this path is correct

// Create an instance of DataSource to configure your database connection
export const AppDataSource = new DataSource({
  type: "postgres",      // Database type (e.g., 'mysql', 'sqlite', 'mariadb', etc.)
  host: "localhost",     // The host where your database is running
  port: 5432,            // The port number of the database
  username: "your-username", // Database username
  password: "your-password", // Database password
  database: "your-database", // Database name
  entities: [Product],   // List all your entity classes here
  synchronize: true,     // Synchronize the schema with the database (set to false in production)
  logging: true,         // Enable query logging
});

// Initialize the database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => console.error("Error connecting to database:", error));
