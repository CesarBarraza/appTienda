import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../servicios/clases/producto.model';
import { ProductoService } from 'src/app/servicios/servicio/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  filtro_valor = '';
  producto:Producto [] = [];
  productoCarrito: Producto[]=[]

  constructor(private servicios: ProductoService, private router: Router) { }
  
  ngOnInit() {
    this.listar()
  }

  listar(){
    this.servicios.getProductos().subscribe(
      data=>this.producto=data
    )
  }

  vista(pro: Producto){
    this.servicios.productoService = pro;
    this.router.navigate(['vista-rapida'])
  }

  vistaRapida(producto: Producto){
   // console.log(producto.IDProducto)
     this.servicios.mostrarUnProducto(producto.IDProducto)
    .subscribe(data => console.log(data))
  }

  handlerSearch(value: string){
    this.filtro_valor = value;
  }
}
