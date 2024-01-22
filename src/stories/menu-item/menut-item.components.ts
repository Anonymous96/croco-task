import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-nav-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.css'],
})
export class MenuItemComponent {
  @Input()
  label = 'Slots';

  @Input()
  imgUrl = '';

  @Input()
  active: boolean = false;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
