import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import{ MatSidenavModule } from '@angular/material/sidenav';
import{ MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/producto/productos/productos.component';
import { ListaProductoComponent } from './componentes/producto/lista-producto/lista-producto.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VistaProductoComponent } from './componentes/vista-producto/vista-producto.component';
import { ProductoVistaCardComponent } from './componentes/vista-producto/producto-vista-card/producto-vista-card.component';
import { CheckColumnComponent } from './componentes/vista-producto/check-column/check-column.component';
import { FilterPipe } from './servicios/filter.pipe';
import { VistaCarritoComponent } from './componentes/vista-producto/vista-carrito/vista-carrito.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    ListaProductoComponent,
    UsuarioComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ProductoVistaCardComponent,
    VistaProductoComponent,
    CheckColumnComponent,
    FilterPipe,
    VistaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
