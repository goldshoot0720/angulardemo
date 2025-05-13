import { Component, OnInit } from '@angular/core';
import {TablemyComponent} from '../tablemy/tablemy.component';

@Component({
  selector: 'app-tab8',
  imports: [
    TablemyComponent
  ],
  templateUrl: './tab8.component.html',
  styleUrl: './tab8.component.css'
})
export class Tab8Component {
  columns = [
    {
      column1: '合作金庫',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '合作金庫',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '台北富邦',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '台北富邦',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '國泰世華',
      column2: '活存',
      column3: '265',
      column4: '',
    },
    {
      column1: '國泰世華',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '兆豐銀行',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '兆豐銀行',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '王道銀行',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '王道銀行',
      column2: '定存',
      column3: '',
      column4: '',
    },    {
      column1: '新光銀行',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '新光銀行',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '中華郵政',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '中華郵政',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '玉山銀行',
      column2: '活存',
      column3: '254',
      column4: '',
    },
    {
      column1: '玉山銀行',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '台新銀行',
      column2: '活存',
      column3: '31',
      column4: '',
    },
    {
      column1: '台新銀行',
      column2: '定存',
      column3: '3333',
      column4: '',
    },
    {
      column1: '中國信託',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '中國信託',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '鋒兄銀行',
      column2: '活存',
      column3: '',
      column4: '',
    },
    {
      column1: '鋒兄銀行',
      column2: '定存',
      column3: '',
      column4: '',
    },
    {
      column1: '鋒兄銀行',
      column2: '定存利息',
      column3: '',
      column4: '',
    },
  ];
  columns2 = [
    {
      column1: '街口支付',
      column2: '',
      column3: '',
      column4: '',
    },
    {
      column1: '悠遊付',
      column2: '',
      column3: '',
      column4: '',
    },
    {
      column1: 'Samsung Wallet',
      column2: '548',
      column3: '悠遊卡',
      column4: '',
    },
    {
      column1: '小米手環9NFC',
      column2: '200',
      column3: 'SuperCard超級悠遊卡',
      column4: '冰川銀',
    },
    {
      column1: '小米手環9NFC',
      column2: '',
      column3: 'SuperCard超級悠遊卡',
      column4: '午夜黑',
    },
    {
      column1: '全聯',
      column2: '19',
      column3: '',
      column4: '',
    },
    {
      column1: '家樂福',
      column2: '23',
      column3: '',
      column4: '',
    },
    {
      column1: 'vivoactive 5',
      column2: '',
      column3: '悠遊卡',
      column4: '',
    },
    {
      column1: 'vivoactive 6',
      column2: '',
      column3: '悠遊卡',
      column4: '',
    },
  ];

  columns3 = [
    {
      column1: '台灣行動支付',
      column2: '♾️',
      column3: '',
      column4: '',
    },
    {
      column1: '合作金庫',
      column2: '6',
      column3: '6',
      column4: '',
    },
    {
      column1: '台北富邦',
      column2: '5',
      column3: '5',
      column4: '',
    },
    {
      column1: '國泰世華',
      column2: '',
      column3: '',
      column4: '資產50萬元(含)以上，「臺幣跨轉5次免手續費」優惠券',
    },
    {
      column1: '兆豐銀行',
      column2: '',
      column3: '',
      column4: '數位存款 10/10',
    },
    {
      column1: '王道銀行',
      column2: '5',
      column3: '',
      column4: '2萬元（含）以上，跨行提款3次',
    },    {
      column1: '新光銀行',
      column2: '3',
      column3: '3',
      column4: '',
    },
    {
      column1: '中華郵政',
      column2: '',
      column3: '',
      column4: '',
    },
    {
      column1: '玉山銀行',
      column2: '3',
      column3: '3',
      column4: '',
    },
    {
      column1: '台新銀行',
      column2: '5',
      column3: '5',
      column4: 'Richart',
    },
    {
      column1: '中國信託',
      column2: '1',
      column3: '1(他行卡，事後)',
      column4: '中信交易優惠券',
    },
  ];

  ngOnInit(): void {
    let oddSum = 0;
    let evenSum = 0;

    this.columns.forEach((item, index) => {
      const value = parseFloat(item.column3) || 0;
      if ((index + 1) % 2 === 1) {
        oddSum += value;
      } else {
        evenSum += value;
      }
    });

    this.columns = this.columns.map(item => {
      if (item.column1 === '鋒兄銀行' && item.column2 === '活存') {
        return { ...item, column3: oddSum.toString() };
      } else if (item.column1 === '鋒兄銀行' && item.column2 === '定存') {
        return { ...item, column3: evenSum.toString() };
      } else if (item.column1 === '鋒兄銀行' && item.column2 === '定存利息') {
        return { ...item, column3: (Math.floor(evenSum*1.715/100)).toString() };
      } else {
        return item;
      }
    });
  }
}
