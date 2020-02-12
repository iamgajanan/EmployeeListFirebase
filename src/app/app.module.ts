import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NewCompComponent } from './new-comp/new-comp.component';
import { ListCompComponent } from './list-comp/list-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    ListCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,             // For FireStore
    AngularFireStorageModule,	        // For Storage
    AngularFireAuthModule,		// For Authentication
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
