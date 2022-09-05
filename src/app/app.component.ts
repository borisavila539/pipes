import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitan America';
  nombre2: string = 'boris albert avila lanza';
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI:number = Math.PI;
  Porcetaje:number = 0.234;
  salario:number = 1234.5;
  fecha:Date = new Date();
  idioma : string = 'es';
  password: string = 'holamundo';
  activar :boolean = true;
  videoURL:string = 'https://www.youtube.com/embed/mWRsgZuwf_8';

  valorPromesa =  new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('Llego la data');
    },4500);
  });

  heroe = {
    nombre: 'logan',
    clave: 'Wolverin',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa:20
    }
  }
}
