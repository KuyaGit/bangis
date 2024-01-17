import { Input, Directive, ViewContainerRef, TemplateRef, effect, OnInit} from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { UserModel } from './modules/usermanagement/models/user.interface';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  @Input()
  set appHasRole(roles: any[]) {
    let hasRole = false;
    for (const role of roles) {
      if (this._authService.hasRole(role)) {
        hasRole = true;
        break;
      }
    }

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
  ) {

  }

}
