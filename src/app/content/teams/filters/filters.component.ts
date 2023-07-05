import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from 'src/app/shared/models/filter';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() filterQuery = new EventEmitter<string>();

  foods: Filter[] = [
    { value: 'asc', viewValue: 'Old' },
    { value: 'desc', viewValue: 'New' },
  ];

  onSelectChange(event) {
    this.filterQuery.emit(event.value);
  }

}
