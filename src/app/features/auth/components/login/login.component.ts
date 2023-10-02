

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isloggedIn: boolean = false; // Initially, the user is not logged in

 // Add this line to your component
hidePassword: boolean = true;

// Modify the togglePasswordVisibility function
togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
}

  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    // Check if the user is already logged in by verifying the presence of a token
    if (localStorage.getItem('token')) {
      this.isloggedIn = true;
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  
  onSubmit() {
    const loginRequest = {
      email: this.form.value.email,
      password: this.form.value.password
    };
   console.log(loginRequest);
    this.http.post('http://localhost:5148/api/Login', loginRequest, { responseType: 'text' }).subscribe((response: any) => {
      // Handle the response here as text
      localStorage.setItem('token', response);
      alert("Login successful")
      this.isloggedIn = true;
      this.form.reset(); // Reset the form
      this.router.navigate(['/']);
    }, (error) => {
      
      console.log('Error logging in:', error);
      alert('Invalid credentials');
    });
  }
  logout() {
    localStorage.removeItem('token'); // Remove the token from localStorage
    this.isloggedIn = false; // Set the user as logged out
  }
}
