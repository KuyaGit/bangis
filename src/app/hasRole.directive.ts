import { Input, Directive, ViewContainerRef, TemplateRef, effect, OnInit} from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { UserModel } from './modules/usermanagement/models/user.interface';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  @Input()
  set appHasRole(role: any) {
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
  ) {

  }

}
