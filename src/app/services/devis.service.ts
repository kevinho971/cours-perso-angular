import { Injectable } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DevisService {
  subject = new Subject();

  constructor(private afDb: AngularFireDatabase ) { }

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

  editDevis(devis){
    this.subject.next(devis);
  }

  updateDevis(devis){
    return this.afDb.object('devis/${devis.key}').update(devis);
  }



}
