import { Component, OnInit } from '@angular/core';
import {TablemyComponent} from "../tablemy/tablemy.component";

@Component({
  selector: 'app-tab4',
    imports: [
        TablemyComponent
    ],
  templateUrl: './tab4.component.html',
  styleUrl: './tab4.component.css'
})
export class Tab4Component implements OnInit {
  total: number = 0;
  columns = [
    {
      column1: '活力125',
      column2: '58500',
      column3: '2025',
      column4: 'SYM三陽',
      link:'https://24h.pchome.com.tw/prod/DXBK00-A900BFY16'
    },
    {
      column1: 'Pulse Pro',
      column2: '116980',
      column3: '2025',
      column4: 'Gogoro',
      link:'https://www.gogoro.com/tw/smartscooter/pulse/'
    },
    {
      column1: 'Mac mini M1',
      column2: '0',
      column3: '',
      column4: '官網',
      link:'https://support.apple.com/zh-tw/111894',
    },
    {
      column1: 'Mac mini M2',
      column2: '0',
      column3: '',
      column4: '官網',
      link:'https://support.apple.com/zh-tw/111837',
    },
    {
      column1: 'Mac mini M2',
      column2: '18888',
      column3: '8月',
      column4: '16G/512G',
      link:'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=11310822&Area=search&mdiv=403&oid=1_13&cid=index&kw=Mac+mini+M',
    },
    {
      column1: 'ThinkBook 14 G7',
      column2: '23900',
      column3: '2025',
      column4: '16GB/512G/Ultra5 125U',
      link:'https://24h.pchome.com.tw/prod/DHAD83-A900HZ6NA'
    },
    {
      column1: 'Galaxy S25',
      column2: '27900',
      column3: '2025',
      column4: '12G/256G',
      link:'https://24h.pchome.com.tw/category/DYAL05C?sortParm=prc&sortOrder=ac'
    },
    {
      column1: 'iPhone 16e',
      column2: '20900',
      column3: '2025',
      column4: '128G',
      link:'https://24h.pchome.com.tw/store/DYAJ8M?sortParm=prc&sortOrder=ac'
    },
    {
      column1: 'Vivobook 15',
      column2: '22999',
      column3: '8GB*2/1TB',
      column4: 'i7-1355U',
      link:'https://24h.pchome.com.tw/category/DHAF03C?sortParm=prc&sortOrder=dcc'
    },
    {
      column1: 'TUF Gaming A15',
      column2: '31999',
      column3: '16GB/512GB',
      column4: 'R5-7535HS/RTX 4060 8G',
      link:'https://24h.pchome.com.tw/store/DHAS9D?sortParm=prc&sortOrder=ac&min=30000'
    },
    {
      column1: 'Xiaomi Pad 7 Pro',
      column2: '15999',
      column3: '12GB/512GB',
      column4: 'Snapdragon 8s Gen 3',
      link:'https://www.mi.com/tw/product/xiaomi-pad-7-pro/specs?skupanel=1'
    },
    {
      column1: 'ExpertBook P5',
      column2: '41900',
      column3: '16GB/1TB',
      column4: 'Ultra 5 226V',
      link:'https://24h.pchome.com.tw/prod/DHAFMI-A900I04YM'
    },
    {
      column1: 'MacBook Air',
      column2: '35900',
      column3: '16GB/512GB',
      column4: '13吋 M3',
      link:'https://24h.pchome.com.tw/prod/DHAFMI-A900I04YM'
    },
    {
      column1: 'iMac',
      column2: '54777',
      column3: '16GB/512GB',
      column4: '24吋 M4',
      link:'https://24h.pchome.com.tw/prod/DYAJEU-A900I160J'
    },
    {
      column1: 'Mac mini',
      column2: '26093',
      column3: '16GB/512GB',
      column4: 'M4',
      link:'https://24h.pchome.com.tw/prod/DYAJFD-A900I1EWG'
    },
    {
      column1: '合計',
      column2: '',
      column3: '',
      column4: '',
      link:''
    },
  ];

  ngOnInit(): void {
    this.total = this.columns.reduce((sum, item) => sum + Number(item.column2), 0);
    this.columns = this.columns.map(item => {
      if (item.column1 === '合計') {
        return { ...item, column2: String(this.total) };
      } else {
        return item;
      }
    });
    this.columns.sort((a, b) => Number(a.column2) - Number(b.column2));
  }
}
