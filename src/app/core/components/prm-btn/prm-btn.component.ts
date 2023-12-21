import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'prm-btn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<button class="mt-3 btn btn-block btn-xs sm:btn-sm md:btn-md" type="submit">{{button.name}}</button>`,
  styleUrl: './prm-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrmBtnComponent {
  @Input() button: any;
  @Input() type: any;
}
