import { Component, OnInit } from '@angular/core';
import {DevisService} from '../../services/devis.service';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../authentification/services/auth.service';

@Component({
  selector: 'app-backend-devis',
  templateUrl: './backend-devis.component.html',
  styleUrls: ['./backend-devis.component.css']
})
export class BackendDevisComponent implements OnInit {
  devis$;
  isAdmin: boolean = false;

  constructor(private devisService: DevisService, private authService: AuthService) { }

  ngOnInit() {
    this.devis$ = this.devisService.getDevis();

    this.authService.user$.subscribe(user => {
      console.log('user: ', user);
      if (user && user.email === 'test@test.fr'){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    })
  }

  deleteDevis(devis){
    console.log('delete devis', devis);
    this.devisService.deleteDevisById(devis.key);
  }

  showDevisDetails(devis){

  }

  toggleToEditMode(devis){
    this.devisService.editDevis(devis);
  }



}
