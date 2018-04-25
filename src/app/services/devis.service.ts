import { Injectable } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DevisService {

  constructor(private afDb: AngularFireDatabase) { }

  getDevis(){
    return this.afDb.list('devis').valueChanges();
  }

}
