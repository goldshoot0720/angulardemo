import { Component } from '@angular/core';
import {TablemyComponent} from "../tablemy/tablemy.component";

@Component({
  selector: 'app-tab4',
    imports: [
        TablemyComponent
    ],
  templateUrl: './tab4.component.html',
  styleUrl: './tab4.component.css'
})
export class Tab4Component {
  columns = [
    {
      column1: 'Mac mini M2',
      column2: '18,888',
      column3: '8月',
      column4: '16G/512G',
      link:'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=11310822&Area=search&mdiv=403&oid=1_13&cid=index&kw=Mac+mini+M',
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
