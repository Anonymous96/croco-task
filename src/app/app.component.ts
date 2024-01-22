import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItemComponent } from '../stories/menu-item/menut-item.components';
import { HeaderComponent } from './core/header/header.component';
import { NavigationComponent } from './core/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'croco-task';
}
