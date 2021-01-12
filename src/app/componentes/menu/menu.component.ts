import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/servicio/producto.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //suma: number=0;
  @Output() toggleMiCarrito = new EventEmitter<void>();

  constructor(public service: ProductoService,
             private router: Router,
             private dialog: MatDialog) { }

  ngOnInit() {
  }

  abrirMiCarrito(){
    this.toggleMiCarrito.emit();
  }

  abrirLogin(){
    this.dialog.open(LoginComponent);
  }
}
