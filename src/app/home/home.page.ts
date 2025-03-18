import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  alertButtons = ['OK']

  Distancia=0;
  resultado=0;
  tipo='';


  conversao(){

    if(this.tipo == 'Gasolina'){

    this.resultado = this.Distancia/12

  }
  if(this.tipo == 'Alcool'){
    this.resultado = this.Distancia/8

  }
  if(this.tipo == 'Diesel'){
    this.resultado = this.Distancia/10

  }
  }

}
