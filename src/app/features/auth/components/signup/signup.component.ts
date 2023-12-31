import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  hidePassword: boolean = true;

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      roleId: [1],
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      parantage: ['', Validators.required],
      gender: [''],
      phonenumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      addedBy: [1],
      status: ['active'],
      termsAgreed: [false, Validators.requiredTrue]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    const dob = this.form.value.dob instanceof Date ? this.form.value.dob.toISOString().split('T')[0] : this.form.value.dob;

    const registerRequest = {
      roleId: this.form.value.roleId,
      firstName: this.form.value.firstname,
      middleName: this.form.value.middlename,
      lastName: this.form.value.lastname,
      parentage: this.form.value.parantage,
      gender: this.form.value.gender,
      mobileNo: this.form.value.phonenumber,
      emailId: this.form.value.email,
      password: this.form.value.password,
      dob: dob,
      addedBy: this.form.value.addedBy,
      status: this.form.value.status
    };

    this.http.post('http://localhost:5148/api/User', registerRequest).subscribe((response: any) => {
      alert('User added successfully');
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error);
      alert('Error registering.');
    });
  }
}
