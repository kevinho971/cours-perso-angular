import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { DevisComponent } from './devis/devis.component';

//services
import {DevisService} from './services/devis.service';


const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyCgbXYniMNTqKBerXSu1M3LCy8BAyQbGSk",
  authDomain: "udemy-angular-df016.firebaseapp.com",
  databaseURL: "https://udemy-angular-df016.firebaseio.com",
  projectId: "udemy-angular-df016",
  storageBucket: "udemy-angular-df016.appspot.com",
  messagingSenderId: "172311920418"
};


@NgModule({
  declarations: [
    AppComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [
    DevisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
