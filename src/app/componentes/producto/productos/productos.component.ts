import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from '../../../servicios/servicio/producto.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { pluck } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';
import { Producto } from 'src/app/servicios/clases/producto.model';
import { ProductoVistaCardComponent } from '../../vista-producto/producto-vista-card/producto-vista-card.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  nuevoProducto: FormGroup;
  pushProduct: Producto[]=[];
  fileToUpload:string;
  foto: string="/assets/img/subir.png";

  constructor(private service: ProductoService, private fb: FormBuilder) {
   }

  ngOnInit() { 
    this.nuevoProducto= this.fb.group({
      IDProducto: [''],
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Precio: ['', Validators.required], 
      Stock: ['', Validators.required],
      Imagen: [''],
      Rubro: ['', Validators.required]
    })
  }

  ingresarProducto(){
    if(this.service.productoService.IDProducto===null){
      this.agregarProducto();
    }else{
      this.modificarProducto();
    }
  }

  agregarProducto(){
    this.service.postProducto(this.nuevoProducto.value, this.fileToUpload)
    .subscribe((res:Producto)=>{
      this.pushProduct.push(this.nuevoProducto.value);
      this.nuevoProducto.reset();
      this.service.filter('Nuevo Producto');
    })
};

//nuevoProducto.value
modificarProducto(){
  this.service.putProducto(this.service.productoService, this.fileToUpload)
  .subscribe((res: Producto)=>{
    this.pushProduct.push(this.service.productoService);
    this.nuevoProducto.reset();
    this.service.filter('Nuevo Producto');
  })
}

  eliminarProducto(id: number){
    this.service.deleteProducto(id);
  }

  //cargar y comvertir img 
  onUploadImage(event) {
    if (event.target.files.length > 0) {
      const fileReader = new FileReader();
      let imageToUpload = event.target.files.item(0);
      console.log(imageToUpload.name)

      var reader = new FileReader();
      reader.onload = (event:any)=>{
        this.foto = event.target.result;
      }
      reader.readAsDataURL(imageToUpload);//muetras la img en el front

      this.imageToBase64(fileReader, imageToUpload)//llama al metodo para convertir img
        .subscribe(base64image => {
          this.fileToUpload=base64image;
        });
    }
  }

  //convertir img en base64
  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }
}
