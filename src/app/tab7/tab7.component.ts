import {CommonModule} from '@angular/common';
import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import videojs from 'video.js'; // 使用 default import
import 'videojs-playlist'; // Import videojs-playlist as an ES module

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.component.html',
  styleUrls: ['./tab7.component.css'],
  imports: [CommonModule],
})
export class Tab7Component implements AfterViewInit {
  @ViewChild('playerContainer', {static: true}) playerContainer!: ElementRef;
  player!: any;  // 改為 any 以避免型別錯誤

  playlist = [
    {
      name: 'TVアニメ「新米錬金術師の店舗経営」ノンクレジットED',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E6%96%B0%E7%B1%B3%E9%8C%AC%E9%87%91%E8%A1%93%E5%B8%AB%E3%81%AE%E5%BA%97%E8%88%97%E7%B5%8C%E5%96%B6%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED-929249421d7d965.mp4?alt=media&token=bbe6c851-8418-4838-991c-026447704ed2',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「新米錬金術師の店舗経営」ノンクレジットOP',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E6%96%B0%E7%B1%B3%E9%8C%AC%E9%87%91%E8%A1%93%E5%B8%AB%E3%81%AE%E5%BA%97%E8%88%97%E7%B5%8C%E5%96%B6%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP-7b4bfaa937c664b5.mp4?alt=media&token=1e9bd070-7aff-47ea-85aa-dc7804d050c4',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ『リコリス・リコイル』ノンテロップEDムービー｜さユり「花の塔',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%83%AA%E3%82%B3%E3%83%AA%E3%82%B9%E3%83%BB%E3%83%AA%E3%82%B3%E3%82%A4%E3%83%AB%E3%80%8F%E3%83%8E%E3%83%B3%E3%83%86%E3%83%AD%E3%83%83%E3%83%97ED%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC%EF%BD%9C%E3%81%95%E3%83%A6%E3%82%8A%E3%80%8C%E8%8A%B1%E3%81%AE%E5%A1%94%E3%80%8D-58f7e41042ecdb43.mp4?alt=media&token=add5dfed-191e-4cd6-b5f8-1c2349a454ce',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ『リコリス・リコイル』ノンテロップOPムービー｜ClariS「ALIVE」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%83%AA%E3%82%B3%E3%83%AA%E3%82%B9%E3%83%BB%E3%83%AA%E3%82%B3%E3%82%A4%E3%83%AB%E3%80%8F%E3%83%8E%E3%83%B3%E3%83%86%E3%83%AD%E3%83%83%E3%83%97OP%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC%EF%BD%9CClariS%E3%80%8CALIVE%E3%80%8D-62cbcd030a41fd06.mp4?alt=media&token=b23d54e3-56c6-4633-a3be-09d14128d12f',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「クラスの大嫌いな女子と結婚することになった。」ノンクレジットエンディング｜「スキキライも追い越して」桜森朱音（CV.矢野妃菜喜）＆石倉陽鞠（CV.鈴代紗弓）＆北条糸青（CV.稗田寧々）',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E5%A4%A7%E5%AB%8C%E3%81%84%E3%81%AA%E5%A5%B3%E5%AD%90%E3%81%A8%E7%B5%90%E5%A9%9A%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%EF%BD%9C%E3%80%8C%E3%82%B9%E3%82%AD%E3%82%AD%E3%83%A9%E3%82%A4%E3%82%82%E8%BF%BD%E3%81%84%E8%B6%8A%E3%81%97%E3%81%A6%E3%80%8D%E6%A1%9C%E6%A3%AE%E6%9C%B1%E9%9F%B3%EF%BC%88CV.%E7%9F%A2%E9%87%8E%E5%A6%83%E8%8F%9C%E5%96%9C%EF%BC%89%EF%BC%86%E7%9F%B3%E5%80%89%E9%99%BD%E9%9E%A0%EF%BC%88CV.%E9%88%B4%E4%BB%A3%E7%B4%97%E5%BC%93%EF%BC%89%EF%BC%86%E5%8C%97%E6%9D%A1%E7%B3%B8%E9%9D%92%EF%BC%88CV.%E7%A8%97%E7%94%B0%E5%AF%A7%E3%80%85%EF%BC%89-4e8073ccdf8e043.mp4?alt=media&token=5d51bc2c-2f49-455f-9302-e1e9f2fc7a4c',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「クラスの大嫌いな女子と結婚することになった。」ノンクレジットオープニング映像 _ 2025年1月3日より毎週金曜23時30分より放送！',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E5%A4%A7%E5%AB%8C%E3%81%84%E3%81%AA%E5%A5%B3%E5%AD%90%E3%81%A8%E7%B5%90%E5%A9%9A%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%80%82%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%E6%98%A0%E5%83%8F%20_%202025%E5%B9%B41%E6%9C%883%E6%97%A5%E3%82%88%E3%82%8A%E6%AF%8E%E9%80%B1%E9%87%91%E6%9B%9C23%E6%99%8230%E5%88%86%E3%82%88%E3%82%8A%E6%94%BE%E9%80%81%EF%BC%81-585d318e3a439764.mp4?alt=media&token=458ddac3-ac60-4403-a983-f9a6c9827eb3',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「男女の友情は成立する？（いや、しないっ‼）」ノンクレジットED _ 立花日菜「Dear my Soleil」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%B7%E5%A5%B3%E3%81%AE%E5%8F%8B%E6%83%85%E3%81%AF%E6%88%90%E7%AB%8B%E3%81%99%E3%82%8B%EF%BC%9F%EF%BC%88%E3%81%84%E3%82%84%E3%80%81%E3%81%97%E3%81%AA%E3%81%84%E3%81%A3%E2%80%BC%EF%BC%89%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%20_%20%E7%AB%8B%E8%8A%B1%E6%97%A5%E8%8F%9C%E3%80%8CDear%20my%20Soleil%E3%80%8D-1bb68ec17f4af73b.mp4?alt=media&token=e898366e-b5ef-4749-ab37-8e55e97c3978',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「男女の友情は成立する？（いや、しないっ‼）」ノンクレジットOP _ HoneyWorks feat_ハコニワリリィ「質問、恋って何でしょうか_」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%B7%E5%A5%B3%E3%81%AE%E5%8F%8B%E6%83%85%E3%81%AF%E6%88%90%E7%AB%8B%E3%81%99%E3%82%8B%EF%BC%9F%EF%BC%88%E3%81%84%E3%82%84%E3%80%81%E3%81%97%E3%81%AA%E3%81%84%E3%81%A3%E2%80%BC%EF%BC%89%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%20_%20HoneyWorks%20feat_%E3%83%8F%E3%82%B3%E3%83%8B%E3%83%AF%E3%83%AA%E3%83%AA%E3%82%A3%E3%80%8C%E8%B3%AA%E5%95%8F%E3%80%81%E6%81%8B%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%A6%E3%82%99%E3%81%97%E3%82%87%E3%81%86%E3%81%8B_%E3%80%8D-46ed878d6d0817b4.mp4?alt=media&token=d4f549d5-4913-47cc-a473-94baaab1808e',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: 'TVアニメ「結婚するって、本当ですか」ノンクレジットED映像｜「つまりは」ゴホウビ',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%B5%90%E5%A9%9A%E3%81%99%E3%82%8B%E3%81%A3%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%A7%E3%81%99%E3%81%8B%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E6%98%A0%E5%83%8F%EF%BD%9C%E3%80%8C%E3%81%A4%E3%81%BE%E3%82%8A%E3%81%AF%E3%80%8D%E3%82%B4%E3%83%9B%E3%82%A6%E3%83%93.mp4?alt=media&token=ec9e2605-de0f-4a66-85c0-32b9a85d2d44',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ「結婚するって、本当ですか」ノンクレジットOP映像｜「キラキラ」HoneyWorks feat_ハコニワリリィ',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%B5%90%E5%A9%9A%E3%81%99%E3%82%8B%E3%81%A3%E3%81%A6%E3%80%81%E6%9C%AC%E5%BD%93%E3%81%A7%E3%81%99%E3%81%8B%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E6%98%A0%E5%83%8F%EF%BD%9C%E3%80%8C%E3%82%AD%E3%83%A9%E3%82%AD%E3%83%A9%E3%80%8DHoneyWorks%20feat_%E3%83%8F%E3%82%B3%E3%83%8B%E3%83%AF%E3%83%AA%E3%83%AA%E3%82%A3.mp4?alt=media&token=92746756-de1d-461b-9e3a-816f6f26290d',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: 'TVアニメ『ゾン100～ゾンビになるまでにしたい100のこと～』ノンクレジットED│シユイ「ハピネス オブ ザ デッド」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%82%BE%E3%83%B3100%EF%BD%9E%E3%82%BE%E3%83%B3%E3%83%93%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%84100%E3%81%AE%E3%81%93%E3%81%A8%EF%BD%9E%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E2%94%82%E3%82%B7%E3%83%A6%E3%82%A4%E3%80%8C%E3%83%8F%E3%83%94%E3%83%8D%E3%82%B9%20%E3%82%AA%E3%83%96%20%E3%82%B6%20%E3%83%87%E3%83%83%E3%83%89%E3%80%8D.mp4?alt=media&token=0b2c0f42-0d81-42d8-9a22-873dd3642b99',
        type: 'video/mp4'
      }]
    },
    {
      name: 'TVアニメ『ゾン100～ゾンビになるまでにしたい100のこと～』ノンクレジットOP│KANA-BOON「ソングオブザデッド」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2FTV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%82%BE%E3%83%B3100%EF%BD%9E%E3%82%BE%E3%83%B3%E3%83%93%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%97%E3%81%9F%E3%81%84100%E3%81%AE%E3%81%93%E3%81%A8%EF%BD%9E%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E2%94%82KANA-BOON%E3%80%8C%E3%82%BD%E3%83%B3%E3%82%B0%E3%82%AA%E3%83%96%E3%82%B6%E3%83%87%E3%83%83%E3%83%89%E3%80%8D.mp4?alt=media&token=feee2aa4-dca1-4058-a427-1c4283267ddb',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: '「自動販売機に生まれ変わった俺は迷宮を彷徨う」ノンクレジットエンディングPeel the Apple「いつものスープ」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8C%E8%87%AA%E5%8B%95%E8%B2%A9%E5%A3%B2%E6%A9%9F%E3%81%AB%E7%94%9F%E3%81%BE%E3%82%8C%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%9F%E4%BF%BA%E3%81%AF%E8%BF%B7%E5%AE%AE%E3%82%92%E5%BD%B7%E5%BE%A8%E3%81%86%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0Peel%20the%20Apple%E3%80%8C%E3%81%84%E3%81%A4%E3%82%82%E3%81%AE%E3%82%B9%E3%83%BC%E3%83%97%E3%80%8D.mp4?alt=media&token=99a54677-0dd9-454d-8a38-b35fddacf7bb',
        type: 'video/mp4'
      }]
    },
    {
      name: '「自動販売機に生まれ変わった俺は迷宮を彷徨う」ノンクレジットオープニングBRADIO「ファンファーレ」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8C%E8%87%AA%E5%8B%95%E8%B2%A9%E5%A3%B2%E6%A9%9F%E3%81%AB%E7%94%9F%E3%81%BE%E3%82%8C%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%9F%E4%BF%BA%E3%81%AF%E8%BF%B7%E5%AE%AE%E3%82%92%E5%BD%B7%E5%BE%A8%E3%81%86%E3%80%8D%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0BRADIO%E3%80%8C%E3%83%95%E3%82%A1%E3%83%B3%E3%83%95%E3%82%A1%E3%83%BC%E3%83%AC%E3%80%8D.mp4?alt=media&token=2681a1f5-5e80-47db-955b-fcc1f8fe0207',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: '『嘆きの亡霊は引退したい』ノンクレジットエンディング｜P丸様。「すくりぃむ！」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8E%E5%98%86%E3%81%8D%E3%81%AE%E4%BA%A1%E9%9C%8A%E3%81%AF%E5%BC%95%E9%80%80%E3%81%97%E3%81%9F%E3%81%84%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%EF%BD%9CP%E4%B8%B8%E6%A7%98%E3%80%82%E3%80%8C%E3%81%99%E3%81%8F%E3%82%8A%E3%81%83%E3%82%80%EF%BC%81%E3%80%8D.mp4?alt=media&token=f480ed30-8955-4f60-956f-2a45dee03931',
        type: 'video/mp4'
      }]
    },
    {
      name: '『嘆きの亡霊は引退したい』ノンクレジットオープニング｜Lezel「葛藤Tomorrow」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%8E%E5%98%86%E3%81%8D%E3%81%AE%E4%BA%A1%E9%9C%8A%E3%81%AF%E5%BC%95%E9%80%80%E3%81%97%E3%81%9F%E3%81%84%E3%80%8F%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8B%E3%83%B3%E3%82%B0%EF%BD%9CLezel%E3%80%8C%E8%91%9B%E8%97%A4Tomorrow%E3%80%8D.mp4?alt=media&token=93f7e74f-4b85-434d-ad2f-01683927aa56',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: '【ノンクレジットED】TVアニメ「甘神さんちの縁結び」_ ≠ME「神様の言うとーり！」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%90%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E3%80%91TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%98%E7%A5%9E%E3%81%95%E3%82%93%E3%81%A1%E3%81%AE%E7%B8%81%E7%B5%90%E3%81%B3%E3%80%8D_%20%E2%89%A0ME%E3%80%8C%E7%A5%9E%E6%A7%98%E3%81%AE%E8%A8%80%E3%81%86%E3%81%A8%E3%83%BC%E3%82%8A%EF%BC%81%E3%80%8D.mp4?alt=media&token=ecc09513-ba24-45d3-82dd-59fb5c961b79',
        type: 'video/mp4'
      }]
    },
    {
      name: '【ノンクレジットED】TVアニメ「甘神さんちの縁結び」_ 甘神三姉妹「君に恋を結んで」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%90%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88ED%E3%80%91TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%98%E7%A5%9E%E3%81%95%E3%82%93%E3%81%A1%E3%81%AE%E7%B8%81%E7%B5%90%E3%81%B3%E3%80%8D_%20%E7%94%98%E7%A5%9E%E4%B8%89%E5%A7%89%E5%A6%B9%E3%80%8C%E5%90%9B%E3%81%AB%E6%81%8B%E3%82%92%E7%B5%90%E3%82%93%E3%81%A7%E3%80%8D.mp4?alt=media&token=0bc2d1a8-b3e5-47d5-9acf-4528842f47e5',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: '【ノンクレジットOP】TVアニメ「甘神さんちの縁結び」_ ももいろクローバーZ「やわく恋して～ずっと僕らでいられますように～」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%90%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%80%91TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%98%E7%A5%9E%E3%81%95%E3%82%93%E3%81%A1%E3%81%AE%E7%B8%81%E7%B5%90%E3%81%B3%E3%80%8D_%20%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BCZ%E3%80%8C%E3%82%84%E3%82%8F%E3%81%8F%E6%81%8B%E3%81%97%E3%81%A6%EF%BD%9E%E3%81%9A%E3%81%A3%E3%81%A8%E5%83%95%E3%82%89%E3%81%A7%E3%81%84%E3%82%89%E3%82%8C%E3%81%BE%E3%81%99%E3%82%88%E3%81%86%E3%81%AB%EF%BD%9E%E3%80%8D.mp4?alt=media&token=bfb1c828-60ea-4177-8069-d29c8cb86e6c',
        type: 'video/mp4'
      }]
    },
    {
      name: '【ノンクレジットOP】TVアニメ「甘神さんちの縁結び」_ 甘神三姉妹「Pray Pray Pray」',
      sources: [{
        src: 'https://firebasestorage.googleapis.com/v0/b/tsaopaofenghsiung2025.firebasestorage.app/o/videos%2F%E3%80%90%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%80%91TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%94%98%E7%A5%9E%E3%81%95%E3%82%93%E3%81%A1%E3%81%AE%E7%B8%81%E7%B5%90%E3%81%B3%E3%80%8D_%20%E7%94%98%E7%A5%9E%E4%B8%89%E5%A7%89%E5%A6%B9%E3%80%8CPray%20Pray%20Pray%E3%80%8D.mp4?alt=media&token=ec17f59c-77bb-45bb-822c-dc7723f8bc21',
        type: 'video/mp4'
      }]
    }
    ,
    {
      name: '',
      sources: [{
        src: '',
        type: 'video/mp4'
      }]
    }
  ];

  ngAfterViewInit() {
    // 使用 videojs 播放器
    this.player = videojs(this.playerContainer.nativeElement, {
      controls: true,
      preload: 'auto',
      width: 333,
      autoplay: false
    });

    // 設定播放清單
    this.player.playlist(this.playlist);
  }

  playIndex(i: number) {
    // 播放指定索引的影片
    this.player.playlist.currentItem(i);
    this.player.play();
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const fileURL = URL.createObjectURL(file);

    this.player.src({ src: fileURL, type: file.type });
    this.player.play();
  }
}
