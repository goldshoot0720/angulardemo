import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablemy',
  imports: [CommonModule],
  templateUrl: './tablemy.component.html',
  styleUrl: './tablemy.component.css'
})
export class TablemyComponent {
  @Input() columntitle1!: string;
  @Input() columntitle2!: string;
  @Input() columntitle3!: string;
  @Input() columntitle4!: string;
  @Input() columns!: any[];
}
