export interface CreateProductRequest {
    name: string;
    description: string;
    price: number;
    quantity: number;
  }
  
  export interface UpdateProductRequest {
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
  }
  
  export interface ProductResponse {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }
  