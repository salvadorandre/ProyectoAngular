import { Component, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'; 
import { UsersService } from '../../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private route = inject( ActivatedRoute); 
  private usersService = inject(UsersService); 
  public user = toSignal(
    this.route.params.pipe(
      switchMap(
        ( { id } ) => this.usersService.getUserById(id)
      )
    ) 
  )
  

}
