import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/Service/account.service';

@Component({
  selector: 'app-services-start',
  templateUrl: './services-start.component.html',
  styleUrls: ['./services-start.component.scss'],
  providers: [AccountService]
})
export class ServicesStartComponent implements OnInit {
  accounts : {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }


  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
