import { Component } from '@angular/core';
import { LoggingService } from 'src/app/shared/Service/logging.service';
import { AccountService } from 'src/app/shared/Service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {



  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
    ){
      this.accountService.statusUpdated.subscribe((status: string)=>{
        console.log(`new status ${status}`);
      })
    }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountName, accountStatus);

  }
}
