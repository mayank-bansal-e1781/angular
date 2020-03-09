import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.scss']
})
export class AgTableComponent implements OnInit, OnChanges {
  @Input() headers: Array<any>;
  @Input() rows: Array<any>;
  rowscopy;
  constructor() { }

  ngOnInit() {
    console.log(this.headers)
    console.log(this.rows)
  }
  ngOnChanges() {
    this.rowscopy = this.rows
  }
} 
