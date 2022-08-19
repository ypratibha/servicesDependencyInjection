import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  //accountsList: Array<{ name: string; status: string }> = [];
  accountsList: { name: string; status: string }[] = [];

  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private actServ: AccountsService) {}

  onSetTo(status: string) {
    this.actServ.updateStatus(this.id, status);
    this.actServ.statusUpdated.emit(status);
    // this.logServ.logStatusChanged(status);
  }
}
