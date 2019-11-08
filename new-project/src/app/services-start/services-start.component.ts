import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/Service/account.service';
import { LoggingService } from '../shared/Service/logging.service';

@Component({
  selector: 'app-services-start',
  templateUrl: './services-start.component.html',
  styleUrls: ['./services-start.component.scss'],
  providers: [AccountService, LoggingService]
})
export class ServicesStartComponent implements OnInit {
  accounts : {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }



}
