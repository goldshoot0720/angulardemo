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
      name: '草包鋒兄',
      title: '大家長',
      link:'https://www-ws.gov.taipei/001/Upload/297/relfile/7725/97235/5624f50e-9193-4c61-88f3-6a8686ee8adb.pdf',
      linktitle:'臺北市政府',
    },
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
