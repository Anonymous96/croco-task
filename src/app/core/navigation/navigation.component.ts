import { Component } from '@angular/core';
import { MenuItemComponent } from '../../../stories/menu-item/menut-item.components';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {}
