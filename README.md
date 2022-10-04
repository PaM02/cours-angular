#creer un nouveau projet
ng new snapface --style=scss --skip-tests=true
#--style=scss: utiliser le scss
#--skip-tests=true: ne pa utiliser les tests unitaires
#ng serve; pour lancer le serveur
#creer un nouveau component
ng generate component face-snap
#formatage date en français
aller vers le fichier app.module
ajouter : NgModule; dans import { LOCALE_ID, NgModule } from '@angular/core';
importer les lignes suivantes: 
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
mettre : { provide: LOCALE_ID, useValue: 'fr-FR' } dans ;  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
et en fin :  ajouter  constructor() {registerLocaleData(fr.default);} 
dans export class AppModule {constructor() {registerLocaleData(fr.default);}}


#formulaire
ajouter FormsModule dans les imports de app.module.ts
  imports: [
    .......,
    FormsModule,
    ........
  ],
  
#requete http 
import { HttpClientModule } from '@angular/common/http';
   imports: [
    HttpClientModule
  ],
