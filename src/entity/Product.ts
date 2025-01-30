import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;  // Use the `!` operator to tell TypeScript that this will be initialized

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Column("decimal")
  @IsNotEmpty()
  @IsNumber({}, { message: "Price must be a number" })  // Ensure validation
  @Min(0, { message: "Price must be at least 0" })
  price: number;

  @Column("int")
  @IsNotEmpty()
  @IsNumber({}, { message: "Quantity must be a number" })  // Ensure validation
  @Min(0, { message: "Quantity must be at least 0" })
  quantity: number;
}
