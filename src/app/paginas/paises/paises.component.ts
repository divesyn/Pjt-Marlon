import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent implements OnInit {
  listaPaises : any = null;
  constructor(private pais: ApiServiceService) {}

  ngOnInit(){
    this.pais.getListaPaises().subscribe((data:any)=>{
      this.listaPaises = data;
    })
  }
}
