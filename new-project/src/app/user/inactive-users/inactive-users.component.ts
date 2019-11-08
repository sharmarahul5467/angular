import { Component,  Input } from '@angular/core';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  users = this.userService.inactiveUsers;


  constructor(private userService: UserService){}

  onSetToActive(id: number) {
      this.userService.setToActive(id);
  }
}
