import { EventEmitter } from '@angular/core';


export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeCount = new EventEmitter<number>();
  inActiveCount = new EventEmitter<number>();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inActiveCount.emit();
    console.log('user is Inactive now')
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeCount.emit();
    console.log('user is active now')
  }


}
