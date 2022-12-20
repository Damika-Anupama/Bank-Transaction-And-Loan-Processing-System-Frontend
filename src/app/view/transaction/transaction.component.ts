import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent{
  constructor(private toastr: ToastrService) {}

  showToast() {
    this.toastr.success('Hello, world!', 'Toast Title');
  }
}
