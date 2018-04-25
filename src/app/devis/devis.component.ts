import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  devis$;
  
  constructor(private afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.devis$ = this.afDb.list('devis').valueChanges();
  }

}
