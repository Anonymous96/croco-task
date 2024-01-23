import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css',
})
export class NavItemComponent {
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
