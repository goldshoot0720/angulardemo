import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tablemy',
  imports: [CommonModule, FormsModule],
  templateUrl: './tablemy.component.html',
  styleUrl: './tablemy.component.css'
})
export class TablemyComponent {
  @Input() columntitle1!: string;
  @Input() columntitle2!: string;
  @Input() columntitle3!: string;
  @Input() columntitle4!: string;
  @Input() columns!: any[];
  @Input() crud!:boolean;

  isMore = false;
  isEdit = false;

  tempcolumn1!: string;
  tempcolumn2!: string;
  tempcolumn3!: string;
  tempcolumn4!: string;

  tempindex!:number;

  EditClick(column:any, index: number){
    this.isEdit = true ;
    this.isMore = false;
    this.tempcolumn1=column.column1 ;
    this.tempcolumn2=column.column2 ;
    this.tempcolumn3=column.column3 ;
    this.tempcolumn4=column.column4 ;
    this.tempindex=index ;
  }

  CancelClick(){
    this.isEdit = false ;
    this.isMore = false;
  }
  SaveClick(){
    this.isEdit = false ;
    this.isMore = false;
    this.columns[this.tempindex].column1 = this.tempcolumn1!;
    this.columns[this.tempindex].column2 = this.tempcolumn2!;
    this.columns[this.tempindex].column3 = this.tempcolumn3!;
    this.columns[this.tempindex].column4 = this.tempcolumn4!;
  }

  RemoveClick(index: number){
    this.isEdit = false ;
    this.isMore = false;
    this.columns.splice(this.tempindex,1);
  }
}
