import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/servicios/servicio/producto.service';
import { Producto } from '../../../servicios/clases/producto.model';

@Component({
  selector: 'app-vista-carrito',
  templateUrl: './vista-carrito.component.html',
  styleUrls: ['./vista-carrito.component.css']
})
export class VistaCarritoComponent implements OnInit {

  constructor(public servicio: ProductoService) { 
  }

  ngOnInit() {
  }

  sacarProducto(producto: Producto) {
    this.servicio.contador--;
    this.servicio.productoCarrito = this.servicio.productoCarrito.filter(
      item => item !== producto
    )
  }  
}
