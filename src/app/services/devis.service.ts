import { Injectable } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DevisService {

  constructor(private afDb: AngularFireDatabase) { }

  getDevis(){
    // return this.afDb.list('devis').valueChanges();
    return this.afDb.list('devis').snapshotChanges().map(devis => devis.map(devis => ({ key: devis.key, ...devis.payload.val() })));
  }

  createDevis(devis){
    return this.afDb.list('devis').push(devis);
  }

  deleteDevisById(id: string){
    return this.afDb.list('devis').remove(id);
  }

}
