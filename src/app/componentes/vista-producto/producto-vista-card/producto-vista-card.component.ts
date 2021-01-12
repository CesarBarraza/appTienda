import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../servicios/clases/producto.model';
import { ProductoService } from 'src/app/servicios/servicio/producto.service';
import swal  from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-vista-card',
  templateUrl: './producto-vista-card.component.html',
  styleUrls: ['./producto-vista-card.component.css']
})
export class ProductoVistaCardComponent implements OnInit {

  pro: Producto = this.servicios.productoService
  constructor(private servicios: ProductoService, private router: Router) { }
  
  ngOnInit() {
  }

  agregarAcarrito(producto: Producto){
    if(!this.servicios.productoCarrito.includes(producto)){
      this.servicios.contador++;
      this.servicios.productoCarrito.push(producto);
      this.ModalProductoAgrerrado()
      console.log(this.servicios.productoCarrito)

    }else{
      this.ModalproductoEnCarrito()
    }
  }

  ModalProductoAgrerrado(){
    swal({
      title: "Se ha agregado a tu carrito",
      icon: "success",
      timer: 2500,
    });
  }

  ModalproductoEnCarrito(){
    swal("Este producto ya se encuentra en tu carrito", {
      buttons: [null, true],
    });
  }
}
