import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisporIdService } from '../../services/paispor-id.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent implements OnInit {

  public idPais: any;
  infoPais : any = null;

  constructor(private route: ActivatedRoute, private pais: PaisporIdService){}

  ngOnInit() {
    this.idPais = this.route.snapshot.paramMap.get('id');

    this.pais.getPaisporId(this.idPais).subscribe((data:any)=>{
      console.log(data);
      this.infoPais = data;
    })
  }
}
