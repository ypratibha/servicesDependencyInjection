import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(private actServ: AccountsService) {
    this.actServ.statusUpdated.subscribe((status: string) =>
      alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.actServ.addAccount(accountName, accountStatus);
    // this.logServ.logStatusChanged(accountStatus);
  }
}
