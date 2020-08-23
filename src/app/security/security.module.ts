import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HasAnyRoleDirective} from "./has-any-role.directive";


@NgModule({
  declarations: [
    HasAnyRoleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SecurityModule {
}
