import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="btnClick.emit()"
      [ngClass]="btnStyle"
    >
      {{ btnTitle }}
    </button>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ButtonComponents {
  @Input() btnTitle: string = 'Order Now';
  @Input() btnStyle: string = '';
  @Output() btnClick = new EventEmitter();
}
