import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { UserService } from 'src/app/service/customer/user.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  username = '';
  userType = '';
  accounts: any[] | null = null;
  balance = '';
  accountNumber = '';
  selectedAccount: any = null;
  searchTerm = ''
  constructor(private router: Router, private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getDashboardDetails().subscribe(
      (user) => {
        localStorage.setItem('userId', user[0]['user_id']);
        this.username = user[0]['username'];
        this.accounts = user[0]['accounts'];
        this.balance = user[0]['accounts'][0]['amount'];
        this.accountNumber = user[0]['accounts'][0]['account_id'];
        this.selectedAccount = user[0]['accounts'][0];
        switch (user[0]['type']) {
          case 'CUSTOMER':
            this.userType = 'Customer';
            break;
          case 'EMPLOYEE':
            this.userType = 'Employee';
            break;
          case 'ADMIN':
            this.userType = 'Admin';
            break;
          default:
            this.userType = 'Unknown';
        }
      },
      (err) => {
        console.log(err);
      }
    );

    var lineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels: [
          'August',
          'September',
          'October',
          'November',
          'December',
          'January',
        ],
        datasets: [
          {
            label: 'Monthly Expenses',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  updateSmallBox(account: any) {
    // Update the balance value
    this.balance = account.amount;
    // Update the account number value
    this.accountNumber = account.account_id;
  }
}
