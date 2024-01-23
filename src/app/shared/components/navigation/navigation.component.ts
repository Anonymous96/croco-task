import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NAV_ITEMS } from './../../../core/constants';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  navItems = NAV_ITEMS;
}
