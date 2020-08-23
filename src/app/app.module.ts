import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {SecurityModule} from "./security/security.module";
import {environment} from "../environments/environment";

function initializeKeycloak(keycloakService: KeycloakService) {
  return () => keycloakService.init({
    config: {
      url: environment.keycloak.issuer,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId
    },
    loadUserProfileAtStartUp: false,
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: true
    },
    bearerExcludedUrls: []
  });
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    KeycloakAngularModule,
    SecurityModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
