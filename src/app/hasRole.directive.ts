import { Input, Directive, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  @Input()
  set appHasRole(role: string) {
    if (this._authService.hasRole(role)) {
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
