import { Request, Response } from "express";
import { AppDataSource } from "../data-source"; // Ensure this path is correct
import { Product } from "../entity/Product";

const productRepository = AppDataSource.getRepository(Product);

export default class ProductController {
  // Static methods
  static async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const product = productRepository.create(req.body);
      await productRepository.save(product);
      return res.status(201).json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ message: "Error creating product", error });
    }
  }

  static async getProduct(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid product ID" });

      const product = await productRepository.findOne({ where: { id } });
      if (!product) return res.status(404).json({ message: "Product not found" });

      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ message: "Error fetching product", error });
    }
  }

  static async updateProduct(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid product ID" });

      const result = await productRepository.update(id, req.body);
      if (result.affected === 0) return res.status(404).json({ message: "Product not found" });

      return res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      console.error("Error updating product:", error);
      return res.status(500).json({ message: "Error updating product", error });
    }
  }

  static async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid product ID" });

      const result = await productRepository.delete(id);
      if (result.affected === 0) return res.status(404).json({ message: "Product not found" });

      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ message: "Error deleting product", error });
    }
  }
}
