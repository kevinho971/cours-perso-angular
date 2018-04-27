import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { DevisComponent } from './devis/devis.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import  {RouterModule, Routes } from '@angular/router';

import {DevisService} from './services/devis.service';
import { CreateDevisComponent } from './backend/create-devis/create-devis.component';
import { DevisDetailsComponent } from './devis-details/devis-details.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendDevisComponent } from './backend/backend-devis/backend-devis.component';


const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyCgbXYniMNTqKBerXSu1M3LCy8BAyQbGSk",
  authDomain: "udemy-angular-df016.firebaseapp.com",
  databaseURL: "https://udemy-angular-df016.firebaseio.com",
  projectId: "udemy-angular-df016",
  storageBucket: "udemy-angular-df016.appspot.com",
  messagingSenderId: "172311920418"
};

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: DevisComponent },
  { path: 'devis/:id', component: DevisDetailsComponent },
  { path: 'admin', component: BackendHomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DevisComponent,
    CreateDevisComponent,
    DevisDetailsComponent,
    BackendHomeComponent,
    BackendDevisComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    DevisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
