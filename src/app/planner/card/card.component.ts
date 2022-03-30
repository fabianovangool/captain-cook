import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() size!: string;
  @Input() image!: string;
  @Input() id!: number;

  @Output() answer = new EventEmitter<number>();
  onClick(id: number) {
    this.answer.emit(id);
}
}
