import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FullPageLoaderService } from './fullPageLoader.service';

@Component({
  selector: 'app-full-page-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
        <!-- <div id="wrapper" *ngIf="fLoadPageService.isLoading()">
          <div class="bgloader"></div>
          <div class="loader"></div>
        </div> -->
        <body *ngIf="fLoadPageService.isLoading()">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="loader"></div>
        </body>
  `,
  styleUrl: './fullPageLoader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullPageLoaderComponent implements OnInit{
  fLoadPageService = inject(FullPageLoaderService);
  ngOnInit(): void {
    this.fLoadPageService.loadPage();
  }
}
