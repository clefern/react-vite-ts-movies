import { Category } from "../types/Category.type";
import { Censure } from "../types/Censure.type";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  categoria: Category;
  censura: Censure;
  genero: string;
  duracao: number;
}