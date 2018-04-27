import { Component, OnInit } from '@angular/core';
import {DevisService} from '../../services/devis.service';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

  constructor(private devisService: DevisService){}

  onDevisCreated(devis) {
    console.log('devis retrieved', devis);
    let addedDevis = this.devisService.createDevis({
      firstname: devis.value.firstname,
      lastname: devis.value.lastname,
      devis: devis.value.devis
    });
    console.log('addedDevis', addedDevis);
  }

  onDevisUpdated(devis){
    console.log('devis depuis la méthode onDevisUpdated()', devis);
    this.devisService.updateDevis({firstname: devis.value.firstname, lastname: devis.value.lastname, devis: devis.value.devis, key: devis.value.key});
  }

  ngOnInit() {
  }

}
