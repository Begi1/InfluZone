import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to check if password and confirm password match
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
};

// Custom validator to enforce complex password rules
export const passwordComplexityValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    return { passwordComplexity: true };
  }
  return null;
};

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrls: ['./signup-customer.component.scss']
})
export class SignupCustomerComponent {
  currentCard: string = 'signup';

  // Declare the form group
  signupForm: FormGroup;
  otp: string = '';
  termsAccepted: boolean = false;
  submitted = false;  // Add this flag to track submission

  constructor(private companyService: CompanyService, private router: Router, private fb: FormBuilder) {
    // Initialize form with validators
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), passwordComplexityValidator]],
      confirmPassword: ['', [Validators.required]],
      termsAccepted: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator });
  }

  // Getters for easy access to form fields
  get name() { return this.signupForm.get('name'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get termsAcceptedField() { return this.signupForm.get('termsAccepted'); }

  // Navigate between cards
  goToCard(card: string): void {
    this.currentCard = card;
  }

  // Handle form submission
  onSubmit(): void {
    this.submitted = true;  // Set the flag to true on form submission

    // Mark all fields as touched to show validation messages
    Object.values(this.signupForm.controls).forEach(control => {
      control.markAsTouched();
    });

    if (this.signupForm.invalid) {
      console.log(this.signupForm.invalid);
      return; // Avoid submitting if the form is invalid
    }

    const companyData = {
      name: this.name?.value,
      email: this.email?.value,
      password: this.password?.value,
      active: true,
      dateOfCreation: new Date().toISOString(),
    };

    // Send data to the backend for creating company
    this.companyService.createCompany(companyData).subscribe(
      response => {
        console.log('Company created:', response);
        // After successful signup, go to the verification card
        this.goToCard('verification');
      },
      error => {
        console.error('Error creating company:', error);
        alert('Failed to create company. Please try again.');
      }
    );
  }

  // Handle OTP verification
  verifyOtp(): void {
    if (!this.otp) {
      alert('Please enter the OTP.');
      return;
    }

    // Call the service to verify OTP
    this.companyService.verifyOtp(this.email?.value, this.otp).subscribe(
      response => {
        if (response.message === 'OTP is correct') {
          console.log('OTP Verified successfully!');
          // Proceed to the success card
          this.goToCard('success');
        } else {
          alert('Invalid OTP. Please try again.');
        }
      },
      error => {
        console.error('Error verifying OTP:', error);
        alert('Failed to verify OTP. Please try again.');
      }
    );
  }

  // Handle Next button click (Login)
  onNextClick(): void {
    const loginData = {
      email: this.email?.value,
      password: this.password?.value,
    };

    this.companyService.login(loginData).subscribe(
      response => {
        console.log('Logged in successfully:', response);
        localStorage.setItem('accessToken', response.accessToken);
        // Navigate to the profile page after login
        this.router.navigate(['/after-signup-custumer']);
      },
      error => {
        console.error('Login failed:', error);
        alert('Failed to log in. Please try again.');
      }
    );
  }
}