/*descripcion- son los ingredientes del plato y la preparacion es la receta*/ 
import { PLATILLOS } from "./mock-platillos";

export interface platos{
    id: number;
    nombre: string;
    descripcion: string;
    historia: string;
    preparacion: string;
    pais: string;
    imagen?: string;
}

