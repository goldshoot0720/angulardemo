import { Component } from '@angular/core';
import {TablemyComponent} from "../tablemy/tablemy.component";

@Component({
  selector: 'app-tab3',
    imports: [
        TablemyComponent
    ],
  templateUrl: './tab3.component.html',
  styleUrl: './tab3.component.css'
})
export class Tab3Component {
  columns = [
    {
      column1: 'Netflix',
      column2: '290~460',
      column3: '00/00',
      column4: '',
      link:'https://www.netflix.com',
      linktitle:'Netflix'
    },
    {
      column1: '',
      column2: '',
      column3: '',
      column4: '',
    },
    {
      column1: '',
      column2: '',
      column3: '',
      column4: '',
    },
  ];
}
