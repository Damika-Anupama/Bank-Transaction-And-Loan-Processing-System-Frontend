import { Component } from '@angular/core';
import { RegisterCustomerService } from 'src/app/service/employee/register.customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee.register.customer',
  templateUrl: './employee.register.customer.component.html',
  styleUrls: ['./employee.register.customer.component.scss']
})
export class EmployeeRegisterCustomerComponent {
  username = '';
  password = '';
  fullname = '';
  type = 'CUSTOMER';
  gender = '';
  dob = '';
  address = '';
  email = '';
  contact_no = '';
  constructor(private registerCustomer:RegisterCustomerService) { }


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
        contact_no: this.contact_no
      };
      this.registerCustomer.registerCustomer(body).subscribe((res) => {
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
