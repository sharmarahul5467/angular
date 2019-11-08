import { Component,  Input } from '@angular/core';
import { LoggingService } from 'src/app/shared/Service/logging.service';
import { AccountService } from 'src/app/shared/Service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})




export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;



  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
    ){}

  onSetTo(status: string) {

    this.accountService.updateAccountStatus(this.id, status)
    // this.accountService.statusUpdated.emit(status);
    // this.loggingService.logStatusChange(this.account.name , status);

  }
}
