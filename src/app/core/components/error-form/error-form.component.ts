import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>error-form works!</p>`,
  styleUrl: './error-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorFormComponent {
  @Input() requiredErrorName : string = ''
}
