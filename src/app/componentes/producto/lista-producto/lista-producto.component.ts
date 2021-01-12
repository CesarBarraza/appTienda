import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../servicios/servicio/producto.service';
import { Producto } from '../../../servicios/clases/producto.model';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  producto:Producto[]=[];

  constructor(private service: ProductoService) { 
    this.service.refreshList().subscribe((data:any)=>{
      this.listarProducto();
    });
  }

  ngOnInit() {
    this.listarProducto();
  }

  listarProducto(){
    this.service.getProductos().subscribe(data=>{
      this.producto=data
    })
  }

  eliminar(id: number){
    if(confirm('Esta seguro de eliminar?')){
    this.service.deleteProducto(id).subscribe(
      data=>this.listarProducto()
    )}
  }

  selectProducto(producto: Producto){
   this.service.productoService = Object.assign({}, producto);
   console.log(producto)
  }
}
