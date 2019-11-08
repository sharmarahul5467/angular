import { Component } from '@angular/core';
import { UserService } from '../shared/Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent {
  activeUsers = this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;
  activeUsercount = 0;
  inActiveUsercount = 0;



  constructor(private userService: UserService) {
    this.userService.activeCount.subscribe((count: number) => {
      ++this.activeUsercount;
    })
    this.userService.inActiveCount.subscribe((count: number) => {
      ++this.inActiveUsercount;
    })
  }

  ngOnInit() {
  }


}
