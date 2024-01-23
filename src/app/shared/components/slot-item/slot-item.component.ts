import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'slot-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './slot-item.component.html',
  styleUrls: ['./slot-item.component.css'],
})
export class SlotItemComponent {
  @Input()
  title = '';

  @Input()
  imgUrl = '';

  @Input()
  tags: string[] = [];

  @Output()
  onClick = new EventEmitter<Event>();
}
