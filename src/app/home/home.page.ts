import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

 constructor() {}
imc=0;


alertButtons = ['ok'];
w() {}
peso=0;
hautura=0;
res='';


tempodevida(){

  this.imc=this.peso/(this.hautura*this.hautura);

if(this.imc<18.5){
  this.res = 'Você esta abaixo do peso'
}
else if(this.imc<=24.9){
    this.res = 'Você esta no peso normal.'
  }
 else if(this.imc <29.9){
  this.res = 'Você esta sobrepeso.'
 }

else if(this.imc <=34.9){
  this.res= 'Você esta obeso grau 1.'
 }
else if(this.imc <=39.9){
  this.res = 'você esta obeso grau 2.'
}
else if(this.imc >40){
  this.res = 'você esta obeso grau 3'
}

}

}
