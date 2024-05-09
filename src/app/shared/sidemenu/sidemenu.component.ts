import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {

  public menuItems = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((routes) => !routes.path?.includes(':'));
  constructor() {
    console.log(this.menuItems)
  }
}
