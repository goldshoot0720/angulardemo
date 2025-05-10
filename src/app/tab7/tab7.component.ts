import {CommonModule} from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import videojs from 'video.js'; // 使用 default import
import 'videojs-playlist'; // Import videojs-playlist as an ES module

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.component.html',
  styleUrls: ['./tab7.component.css'],
  imports: [CommonModule],
})
export class Tab7Component implements AfterViewInit {
  @ViewChild('playerContainer', { static: true }) playerContainer!: ElementRef;
  player!: any;  // 改為 any 以避免型別錯誤

  playlist = [
    {
      name: 'TVアニメ「クラスの大嫌いな女子と結婚することになった。」ノンクレジットエンディング｜「スキキライも追い越して」桜森朱音（CV.矢野妃菜喜）＆石倉陽鞠（CV.鈴代紗弓）＆北条糸青（CV.稗田寧々）-4e8073ccdf8e043.mp4',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E5%A4%A7%E5%AB%8C%E3%81%84%E3%81%AA%E5%A5%B3%E5%AD%90%E3%81%A8%E7%B5%90%E5%A9%9A%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%EF%BD%9C%E3%80%8C%E3%82%B9%E3%82%AD%E3%82%AD%E3%83%A9%E3%82%A4%E3%82%82%E8%BF%BD%E3%81%84%E8%B6%8A%E3%81%97%E3%81%A6%E3%80%8D%E6%A1%9C%E6%A3%AE%E6%9C%B1%E9%9F%B3%EF%BC%88CV.%E7%9F%A2%E9%87%8E%E5%A6%83%E8%8F%9C%E5%96%9C%EF%BC%89%EF%BC%86%E7%9F%B3%E5%80%89%E9%99%BD%E9%9E%A0%EF%BC%88CV.%E9%88%B4%E4%BB%A3%E7%B4%97%E5%BC%93%EF%BC%89%EF%BC%86%E5%8C%97%E6%9D%A1%E7%B3%B8%E9%9D%92%EF%BC%88CV.%E7%A8%97%E7%94%B0%E5%AF%A7%E3%80%85%EF%BC%89-4e8073ccdf8e043.mp4?alt=media&token=5d51bc2c-2f49-455f-9302-e1e9f2fc7a4c',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「クラスの大嫌いな女子と結婚することになった。」ノンクレジットオープニング映像 _ 2025年1月3日より毎週金曜23時30分より放送！-585d318e3a439764.mp4',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E5%A4%A7%E5%AB%8C%E3%81%84%E3%81%AA%E5%A5%B3%E5%AD%90%E3%81%A8%E7%B5%90%E5%A9%9A%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%20_%202025%E5%B9%B41%E6%9C%883%E6%97%A5%E3%82%88%E3%82%8A%E6%AF%8E%E9%80%B1%E9%87%91%E6%9B%9C23%E6%99%8230%E5%88%86%E3%82%88%E3%82%8A%E6%94%BE%E9%80%81%EF%BC%81-585d318e3a439764.mp4?alt=media&token=458ddac3-ac60-4403-a983-f9a6c9827eb3',
        type: 'video/mp4'
      }]
    }
  ];

  ngAfterViewInit() {
    // 使用 videojs 播放器
    this.player = videojs(this.playerContainer.nativeElement, {
      controls: true,
      preload: 'auto',
      width: 333
    });

    // 設定播放清單
    this.player.playlist(this.playlist);
    this.player.playlist.autoadvance(0);
  }

  playIndex(i: number) {
    // 播放指定索引的影片
    this.player.playlist.currentItem(i);
  }
}
