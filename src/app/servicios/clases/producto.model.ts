import { NgForm } from '@angular/forms';

export class Producto {
    IDProducto: number;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    Stock: number;
    Imagen?: string;
    Rubro: string;
}
