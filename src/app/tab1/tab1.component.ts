import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablemyComponent } from '../tablemy/tablemy.component';

@Component({
  selector: 'app-tab1',
  imports: [CommonModule,TablemyComponent],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css'
})
export class Tab1Component implements OnInit {
  columns = [
    {
      column1: 'Apple iPad 11',
      column2: '05/15',
      column3: '05/30',
      column4: '大潤發',
      link:'https://news.rt-mart.com.tw/main/6772'
    },
    {
      column1: '經典摩卡壺',
      column2: '05/31',
      column3: '06/15',
      column4: 'momo',
    },
    {
      column1: '變頻電風扇',
      column2: '05/31',
      column3: '06/15',
      column4: 'momo',
    }
  ];
  columns2 = [
    {
      column1: '御料小館椒鹽鹽酥雞',
      column2: '05/13',
      column3: 'i禮贈',
      column4: '小七',
    },
    {
      column1: '新熱仙女紅茶',
      column2: '05/13',
      column3: '酷碰券',
      column4: '全家',
    },
    {
      column1: '10元購物金',
      column2: '06/30',
      column3: '國泰優惠',
      column4: '全家',
    }
  ];
  columns3 = [
    {
      column1: 'LINE POINTS',
      column2: '0',
      column3: '00/00',
      column4: 'LINE Pay簽帳金融卡',
    },
    {
      column1: 'P幣帳戶',
      column2: '0',
      column3: '00/00',
      column4: '玉山Pi拍兔簽帳金融卡',
    },
    {
      column1: '街口幣',
      column2: '0',
      column3: '00/00',
      column4: '街口支付',
    }
  ];
  ngOnInit(){

  }
}
