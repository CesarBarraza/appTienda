import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './componentes/producto/lista-producto/lista-producto.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { VistaProductoComponent } from './componentes/vista-producto/vista-producto.component';
import { VistaCarritoComponent } from './componentes/vista-producto/vista-carrito/vista-carrito.component';
import { ProductoVistaCardComponent } from './componentes/vista-producto/producto-vista-card/producto-vista-card.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'producto-vista', component: VistaProductoComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mi-carrito', component: VistaCarritoComponent },
  { path: 'vista-rapida', component: ProductoVistaCardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
