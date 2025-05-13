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
  isNew = false;

  tempcolumn1!: string;
  tempcolumn2!: string;
  tempcolumn3!: string;
  tempcolumn4!: string;
  templink!: string;

  tempindex!:number;

  EditClick(column:any, index: number){
    this.isEdit = true ;
    this.isMore = false;
    this.isNew = false ;
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
    this.isNew = false ;
  }
  EditDoubleClick(){
    this.isEdit = false ;
    this.isMore = false;
    if ( confirm(`確定編輯?!\n${this.tempcolumn1!}\n${this.tempcolumn2!}\n${this.tempcolumn3!}\n${this.tempcolumn4!}`) ) {
      this.columns[this.tempindex].column1 = this.tempcolumn1!;
      this.columns[this.tempindex].column2 = this.tempcolumn2!;
      this.columns[this.tempindex].column3 = this.tempcolumn3!;
      this.columns[this.tempindex].column4 = this.tempcolumn4!;
    }
  }

  RemoveClick(column:any, index: number){
    this.isEdit = false ;
    this.isMore = false;
    this.isNew = false ;
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

  NewClick(){
    this.isNew = true ;
    this.isMore = false;
    this.isEdit = false ;
  }

  NewDoubleClick(){
    if( this.tempcolumn1 == null || this.tempcolumn2 == null || this.tempcolumn3 == null ) {
      alert(`${this.columntitle1!}\n${this.columntitle2!}\n${this.columntitle3!}\n不得為空`);
      this.isNew = false ;
      return;
    }
    if ( confirm(`確定新增?!\n${this.tempcolumn1!}\n${this.tempcolumn2!}\n${this.tempcolumn3!}\n${this.tempcolumn4!}`) ) {
      this.columns.push({
        column1: this.tempcolumn1,
        column2: this.tempcolumn2,
        column3: this.tempcolumn3,
        column4: this.tempcolumn4
      });
      this.tempcolumn1 = '';
      this.tempcolumn2 = '';
      this.tempcolumn3 = '';
      this.tempcolumn4 = '';
      this.isNew = false ;
    }
  }
}
