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
  mydatestr: string = new Date().toISOString().substring(0, 10);
  ngOnInit() {

  }
  DateCountDown(){
    let date1 = new Date();
    let date2 = new Date(this.mydatestr);
    let date3 = Math.floor((date2.getTime() - date1.getTime())/1000/3600/24);
    return date3;
  }
}
