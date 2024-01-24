import { Input, Directive, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  @Input()
  set appHasRole(roles: any) {
    const hasRole = roles.includes(this._authService.userInfo?.accountType);
    if (hasRole) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private _authService: AuthService
  ) {}
}
