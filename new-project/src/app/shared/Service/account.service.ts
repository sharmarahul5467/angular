import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();




  constructor(private loggingService: LoggingService){}
  addAccount(name: string, status: string){
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(name, status);
    this.statusUpdated.emit(status);


  }
  updateAccountStatus(id: number, status: string){
    this.accounts[id].status = status ;
    this.loggingService.logStatusChange(this.accounts[id].name , status);
    this.statusUpdated.emit(status);
  }
}
