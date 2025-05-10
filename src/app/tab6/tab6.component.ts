import { Component } from '@angular/core';

@Component({
  selector: 'app-tab6',
  imports: [],
  templateUrl: './tab6.component.html',
  styleUrl: './tab6.component.css'
})
export class Tab6Component {
  members = [
    {
      name: '塗○傑',
      title: '董事',
      link:'https://www.tapmc.com.tw',
      linktitle:'臺北農產運銷公司',
    },
    {
      name: '劉○萱',
      title: '局長',
      link:'https://www.dep.gov.taipei',
      linktitle:'臺北市政府環境保護局',
    },
    {
      name: '賴○蓉',
      title: '局長',
      link:'https://dof.gov.taipei',
      linktitle:'臺北市政府財政局',
    },
  ];
}
