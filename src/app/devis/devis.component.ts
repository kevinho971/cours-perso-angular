import { Component, OnInit } from '@angular/core';
import {DevisService} from '../services/devis.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  devis$;

  constructor(private devisService: DevisService) { }

  ngOnInit() {
    this.devis$ = this.devisService.getDevis();
  }

}
