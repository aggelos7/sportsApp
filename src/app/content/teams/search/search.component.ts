import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchQuery = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    name: [''],
  });

  applyFilter() {
    if (this.form.get('name').value) {
      this.searchQuery.emit(this.form.get('name').value);
    }
    
  }

  clearForm() {
    this.form.reset();
  }

  resetFilters() {
    this.clearForm();
    this.searchQuery.emit('');
  }
}
