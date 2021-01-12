import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/servicio/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.service.productoService={
      IDProducto: null,
      Nombre: '',
      Descripcion: '',
      Precio: null,
      Stock: null,
      Imagen: null,
      Rubro: ''
    }
  }

}
