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

  valor=0;
  resultado=0;
  moeda='';


  conversao(){

    if(this.moeda == 'Dolar'){

    this.resultado = this.valor/5

  }
  if(this.moeda == 'Euro'){
    this.resultado = this.valor/5.5

  }
  }

}
