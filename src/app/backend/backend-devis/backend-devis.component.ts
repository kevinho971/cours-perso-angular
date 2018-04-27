import { Component, OnInit } from '@angular/core';
import {DevisService} from '../../services/devis.service';

@Component({
  selector: 'app-backend-devis',
  templateUrl: './backend-devis.component.html',
  styleUrls: ['./backend-devis.component.css']
})
export class BackendDevisComponent implements OnInit {
  devis$;

  constructor(private devisService: DevisService) { }

  ngOnInit() {
    this.devis$ = this.devisService.getDevis();
  }

  deleteDevis(devis){
    console.log('delete devis', devis);
    this.devisService.deleteDevisById(devis.key);
  }

  showDevisDetails(devis){

  }

}
