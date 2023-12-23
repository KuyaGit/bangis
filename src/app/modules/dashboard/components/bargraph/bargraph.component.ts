import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bargraph',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>bargraph works!</p>`,
  styleUrl: './bargraph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BargraphComponent { }
