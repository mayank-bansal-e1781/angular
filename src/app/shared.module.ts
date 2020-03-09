import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgTableComponent } from './components/generic/ag-table/ag-table.component';



@NgModule({
  declarations: [
    AgTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgTableComponent
  ]
})
export class SharedModule { }
