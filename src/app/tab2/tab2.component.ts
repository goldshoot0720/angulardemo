import { Component } from '@angular/core';
import {TablemyComponent} from "../tablemy/tablemy.component";

@Component({
  selector: 'app-tab2',
    imports: [
        TablemyComponent
    ],
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.css'
})
export class Tab2Component {
  columns = [
    {
      column1: 'Mirtazapine O.D 30mg/ tab (Sinmaron)',
      column2: '25天(相當於3週又4天)',
      column3: '天晟/譚詠康(身心科)',
      column4: '無',
    },
  ];
  columns2 = [
    {
      column1: '天晟/譚詠康(身心科)',
      column2: '05/26(一)~06/05(四)',
      column3: '06/23(一)~07/03(四',
      column4: '07/31(四)下午',
      link:'https://www.tcmg.com.tw/index.php/main/schedule_time?id=14'
    },
    {
      column1: '天晟/黃信凱(心臟內科)',
      column2: '[預定改成07/11(五)下午]',
      column3: '05/27(二)~06/06(五)',
      column4: '07/04(五)下午',
      link: 'https://www.tcmg.com.tw/index.php/main/schedule_time?id=18'
    },
    {
      column1: '范光迪/陳建鴻',
      column2: '[預定改成06/30(一)或07/03(三)上午]',
      column3: '[預定改成07/10 /11 /12(四五六)上午',
      column4: '06/27(五)上午',
      link: 'https://www.fanktclinic.com/'
    },
    {
      column1: '晶鑽牙醫',
      column2: '',
      column3: '',
      column4: '08/00(無)下午',
    },
  ];
}
