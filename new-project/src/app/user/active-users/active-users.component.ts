import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  // @Input() users: string[];
users = this.userService.activeUsers;

  constructor(private userService: UserService){}
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
