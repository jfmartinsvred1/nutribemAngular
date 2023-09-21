import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  
  constructor(private router:Router){

  }
  classAtual:string='botao';
  class(){
    let url=this.router.url
    if(url=='/login'){
      return 'botao_clickado';
    }
    return 'botao';
  }
}
