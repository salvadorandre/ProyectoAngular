import { Component, Inject, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users', 
  standalone: true,
  imports: [TitleComponent, RouterLink, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public userService = inject(UsersService)



}
