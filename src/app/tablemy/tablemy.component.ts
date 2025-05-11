import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tablemy',
  imports: [CommonModule, FormsModule],
  templateUrl: './tablemy.component.html',
  styleUrl: './tablemy.component.css'
})
export class TablemyComponent implements  OnInit {
  @Input() columntitle1!: string;
  @Input() columntitle2!: string;
  @Input() columntitle3!: string;
  @Input() columntitle4!: string;
  @Input() columns!: any[];
  @Input() crud!:boolean;
  @Input() link!:boolean;

  isMore = false;
  isEdit = false;

  tempcolumn1!: string;
  tempcolumn2!: string;
  tempcolumn3!: string;
  tempcolumn4!: string;
  templink!: string;

  tempindex!:number;

  EditClick(column:any, index: number){
    this.isEdit = true ;
    this.isMore = false;
    this.tempcolumn1=column.column1 ;
    this.tempcolumn2=column.column2 ;
    this.tempcolumn3=column.column3 ;
    this.tempcolumn4=column.column4 ;
    this.tempindex=index ;
    this.templink = column.link ;
  }

  CancelClick(){
    this.isEdit = false ;
    this.isMore = false;
  }
  SaveClick(){
    this.isEdit = false ;
    this.isMore = false;
    if ( confirm(`確定儲存?!\n${this.tempcolumn1!}\n${this.tempcolumn2!}\n${this.tempcolumn3!}\n${this.tempcolumn4!}`) ) {
      this.columns[this.tempindex].column1 = this.tempcolumn1!;
      this.columns[this.tempindex].column2 = this.tempcolumn2!;
      this.columns[this.tempindex].column3 = this.tempcolumn3!;
      this.columns[this.tempindex].column4 = this.tempcolumn4!;
    }
  }

  RemoveClick(column:any, index: number){
    this.isEdit = false ;
    this.isMore = false;
    this.tempcolumn1=column.column1 ;
    this.tempcolumn2=column.column2 ;
    this.tempcolumn3=column.column3 ;
    this.tempcolumn4=column.column4 ;
    this.tempindex=index ;
    if ( confirm(`確定刪除?!\n${this.tempcolumn1!}\n${this.tempcolumn2!}\n${this.tempcolumn3!}\n${this.tempcolumn4!}`) )
    {
      this.columns.splice(this.tempindex,1);
      if ( this.columns.length == 0){
        this.crud = false;
      }
    }
  }

  ngOnInit() {
    if ( this.columns.length == 0){
      this.crud = false;
    }
  }
}
