import {Directive} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Directive({
  selector: '[appHasAnyRole]'
})
export class HasAnyRoleDirective {

  constructor(keycloakService: KeycloakService) {
    keycloakService.isLoggedIn().then((result) => {
      console.log('logged in?', result);
    });
    console.log("Usernames", keycloakService.getUsername());
    console.log("Getting all roles", keycloakService.getUserRoles(true));
  }

}
