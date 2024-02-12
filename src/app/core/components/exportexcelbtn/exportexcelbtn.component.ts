import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import * as xlsx from 'xlsx'
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-exportexcelbtn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <button class="btn bg-red-600 border-none hover:bg-red-700 text-white ml-1" (click)="exportexcel()">
      <i class="fa-solid fa-download"></i>
      Download Excel
    </button>`,
  styleUrl: './exportexcelbtn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportexcelbtnComponent {
  @Input() data: any;
  @Input() fileName: string = '';


  // Dependency Injection
  _alert = inject(AlertService)
  exportexcel() {
    if(this.data == undefined) {
      this._alert.handleError('There no data in Table')
      return
    } else {
      const dataParse = JSON.parse(JSON.stringify(this.data));
      const columns = this.getColumns(dataParse);
      const worksheet = xlsx.utils.json_to_sheet(dataParse, { header: columns });
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      xlsx.writeFile(workbook, this.fileName);
    }
  }
  getColumns(data: any[]): string[] {
    const columns: string[] = [];
    data.forEach(row => {
      Object.keys(row).forEach(col => {
        if (!columns.includes(col)) {
          columns.push(col);
        }
      });
    });
    return columns;
  }
}
