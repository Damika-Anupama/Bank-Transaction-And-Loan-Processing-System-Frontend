import { Component, OnInit } from '@angular/core';
import { EmployeeHomeService } from 'src/app/service/employee/employee.home.service';

@Component({
  selector: 'app-employee.home',
  templateUrl: './employee.home.component.html',
  styleUrls: ['./employee.home.component.scss']
})
export class EmployeeHomeComponent implements OnInit{
  customers: any;
  constructor(private home:EmployeeHomeService) { }
  ngOnInit(): void {
    this.home.getEmployeeHome().subscribe((data) => {
      this.customers = data.data;
    });
  }


}
