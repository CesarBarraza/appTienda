import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Producto } from '../clases/producto.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  contador: number =0;
  productoCarrito: Producto[]=[]
  url = 'https://localhost:44308/api';
  productoService: Producto;
  nuevoProducto= new Subject<any>();

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+ '/producto');
  }

  postProducto(producto: Producto, foto: string): Observable<Producto>{
    producto.Imagen= foto;
    return this.http.post<Producto>(this.url+'/producto', producto);
  }

  putProducto(producto: Producto, foto: string): Observable<Producto>{
    producto.Imagen = foto
    return this.http.put<Producto>(this.url+'/producto/'+producto.IDProducto, producto);
  }

  deleteProducto(id: number){
    return this.http.delete(this.url+'/producto/'+id);
  }

  mostrarUnProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.url+'/producto/'+id);
  }

  refreshList(): Observable<any>{
    return this.nuevoProducto.asObservable();
  }

  filter(filter: string){
    this.nuevoProducto.next(filter);
  }

    total(){
     let total =0;
     this.productoCarrito.forEach((p) => {
         total += p.Precio;
       })
     return total
  }
}
