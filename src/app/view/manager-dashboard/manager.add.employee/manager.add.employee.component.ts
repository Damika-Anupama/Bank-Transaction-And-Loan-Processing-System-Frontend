import { Component } from '@angular/core';
import { AddEmployeeService } from 'src/app/service/manager/add.employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager.add.employee',
  templateUrl: './manager.add.employee.component.html',
  styleUrls: ['./manager.add.employee.component.scss'],
})
export class ManagerAddEmployeeComponent {
  username = '';
  password = '';
  fullname = '';
  type = 'EMPLOYEE';
  gender = '';
  dob = '';
  address = '';
  email = '';
  contact_no = '';
  branch_id = localStorage.getItem('branchId');

  constructor(private addEmployee: AddEmployeeService) {}

  submit() {
    
    if (
      this.username &&
      this.password &&
      this.fullname &&
      this.gender &&
      this.dob &&
      this.address &&
      this.email &&
      this.contact_no
    ) {
      switch (this.gender) {
        case 'Male':
          this.gender = 'MALE';
          break;
        case 'Female':
          this.gender = 'FEMALE';
          break;
        case 'Other':
          this.gender = 'OTHER';
          break;
      }
      const body = {
        username: this.username,
        password: this.password,
        fullname: this.fullname,
        type: this.type,
        gender: this.gender,
        dob: this.dob,
        address: this.address,
        email: this.email,
        contact_no: this.contact_no,
        branch_id: this.branch_id,
      };
      console.log(body);
      this.addEmployee.saveEmployee(body).subscribe((res) => {
        Swal.fire({
          title: 'Success',
          text: 'data.message',
          icon: 'success',
        });
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please fill all the fields',
        icon: 'error',
      });
    }

  }
}
