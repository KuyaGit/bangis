import { CommonModule } from '@angular/common';
import { ClassProvider, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, startWith, tap } from 'rxjs';
import { UserModel } from '../../../modules/usermanagement/models/user.interface';
import { AVacsModel } from '../../../modules/animalvacination/models/avac.interface';
import { HVacModel } from '../../../modules/humanvacination/models/hvac.interface';
import { Animalinjection } from '../../../modules/animalinjection/models/animalinjection';
import { ColumnInterface } from '../../interface/table-data';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.data.component.html',
  styleUrl: './table.data.component.scss'
})
export class TableDataComponent implements OnInit{
  @Input() searchKey$!: Observable<string>;
  @Input() data$!: Observable<UserModel[] | AVacsModel[] | HVacModel[] | Animalinjection[] | any[] >
  @Input() columns: ColumnInterface<any>[] = [];


  pageData$ !: Observable<any[]>
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);
  isLastPage$: Observable<boolean> = new BehaviorSubject(false);
  isFirstPage$: Observable<boolean> = new BehaviorSubject(true);
  totalPage: number = 0;
  itemsPerPage: number = 4;
  totalItems: number = 0;



  nextPage(){
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage(){
    this.currentPage$.next(this.currentPage$.value - 1);
  }
  ngOnInit(): void {
    this.data$ = this.data$.pipe(
      tap((data)=> {
        this.totalItems = data.length;
        this.currentPage$.next(1);
      })
    )

    this.searchKey$ = this.searchKey$.pipe(
      tap(()=>{this.currentPage$.next(1)})
    );

    this.pageData$ =
    combineLatest([this.currentPage$,this.data$,this.searchKey$.pipe(startWith(''))])
    .pipe(
      map(([currentPage,items, searchKey])=>
      items
        .filter((item)=>
                item.name?.toLowerCase().includes(searchKey.toLowerCase()) ||
                item.description?.toLowerCase().includes(searchKey.toLowerCase()) ||
                String(item.active).toLowerCase().includes(searchKey.toLowerCase())
              )
              .slice(this.itemsPerPage*(currentPage-1),this.itemsPerPage*(currentPage))
      )
    );

    this.isFirstPage$ = this.currentPage$.pipe(
      map((currentPage)=> currentPage === 1 ? true : false)
    );

    this.isLastPage$ = combineLatest([
      this.currentPage$,
      this.data$,
      this.searchKey$.pipe(startWith(''))
    ]).pipe(
      map(([currentPage, items, searchKey]) => {
        const filteredItems = items
          .filter(
            (item) =>
              item.name?.toLowerCase().includes(searchKey.toLowerCase()) ||
              item.description?.toLowerCase().includes(searchKey.toLowerCase()) ||
              String(item.active).toLowerCase().includes(searchKey.toLowerCase())
          );

        const totalItems = Math.max(filteredItems.length, 1); // Ensure at least 1 page for empty data
        return currentPage === Math.ceil(totalItems / this.itemsPerPage);
      })
    );
}
}
