import { Component, OnInit } from '@angular/core';
import {DevisService} from '../services/devis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  devis$;

  constructor(private devisService: DevisService, private router: Router) { }

  ngOnInit() {
    this.devis$ = this.devisService.getDevis();
  }

  showDevisDetails(devis){
    console.log('devis', devis);
    this.router.navigate(['/devis', devis.key]);
  }

}
