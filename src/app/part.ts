import { Category } from "./category";

export interface Part {
  id: number;
  category: Category;
  name: string;
  price: string;
  weight: string;
}