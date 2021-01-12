import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/servicio/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  isLogged;
  userForm = this.fb.group({
    user: ['',Validators.required],
    clave: ['', Validators.required],
  })
  constructor(private userSvc: UserService, 
              private fb: FormBuilder,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.isLogged = this.userSvc.isLogged()
  }

  userLogin(){
    this.validarLogin()
  }

  validarLogin(){
    this.userSvc.login(this.userForm.value).subscribe( res =>{
      if(this.userForm.valid){
        if(res){
          localStorage.setItem('login', res.toString())
          this.dialog.closeAll()
          this.router.navigate(['/home'])
        }else{
          localStorage.setItem('login', res.toString())
          alert('usuario o clave invalido')
        }
      }else{
        localStorage.setItem('login', res.toString())
        alert('los datos deben estar completos')
      }
    })
  }
}
