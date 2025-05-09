import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tab5',
  imports: [
    FormsModule
  ],
  templateUrl: './tab5.component.html',
  styleUrl: './tab5.component.css'
})
export class Tab5Component implements OnInit {
  mydatetitle:string = "";
  mydate1str: string = new Date().toISOString().substring(0, 10);
  mydate2str: string = new Date().toISOString().substring(0, 10);
  ngOnInit() {

  }
  NewDate(){
    alert(`${this.mydatetitle} ${this.mydate1str}`);
  }
  NewDateRange(){
    alert(`${this.mydatetitle} ${this.mydate1str} ${this.mydate2str}`);
  }
  DateCountDown(){
    let date1 = new Date();
    let date2 = new Date(this.mydate1str);
    let date3 = Math.floor((date2.getTime() - date1.getTime())/1000/3600/24);
    return date3;
  }
}
