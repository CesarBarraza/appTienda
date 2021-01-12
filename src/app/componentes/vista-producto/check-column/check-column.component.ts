import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-check-column',
  templateUrl: './check-column.component.html',
  styleUrls: ['./check-column.component.css']
})
export class CheckColumnComponent implements OnInit {

  search = new FormControl('');
  @Output('search') searchEmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(300)).subscribe(res => {
      this.searchEmiter.emit(res)
    })
  }

}
