import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator for email regex
const emailValidator = (control: AbstractControl): ValidationErrors | null => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(control.value) ? null : { invalidEmail: true };
};

// Custom validator for password complexity
const passwordComplexityValidator = (control: AbstractControl): ValidationErrors | null => {
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

// Custom validator for password match
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password?.value === confirmPassword?.value ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-signup-influencer',
  templateUrl: './signup-influencer.component.html',
  styleUrls: ['./signup-influencer.component.scss']
})
export class SignupInfluencerComponent {
  currentCard: string = 'signup';
  signupForm: FormGroup;
  otp: string = '';
  submitted = false;

  constructor(
    private influencerService: InfluencerService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), passwordComplexityValidator]],
      confirmPassword: ['', Validators.required],
      date: ['', Validators.required],
      about: [''],
      termsAccepted: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator });
  }

  // Getters for easy access to form fields
  get name() { return this.signupForm.get('name'); }
  get lastname() { return this.signupForm.get('lastname'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get date() { return this.signupForm.get('date'); }
  get termsAcceptedField() { return this.signupForm.get('termsAccepted'); }

  // Navigate between cards
  goToCard(card: string): void {
    this.currentCard = card;
  }

  // Handle form submission
  onSubmit(): void {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    const influencerData = {
      name: this.name?.value,
      lastname: this.lastname?.value,
      email: this.email?.value,
      password: this.password?.value,
      date: this.date?.value,
      about: this.signupForm.get('about')?.value,
      socialMedia: {},
      content: [],
      topThreeVideo: [],
      yourServices: {},
      active: true,
      cout: 0,
      dateOfCreation: new Date().toISOString(),
    };

    // Call the service to create an influencer
    this.influencerService.createInfluencer(influencerData).subscribe(
      response => {
        console.log('Influencer created:', response);
        // After successful signup, go to the verification card
        this.goToCard('verification');
      },
      error => {
        console.error('Error creating influencer:', error);
        if (error.error.message === 'Email is already registered') {
          alert('This email is already registered. Please use a different email.');
        } else {
          alert('Failed to create influencer. Please try again.');
        }
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
    this.influencerService.verifyOtp(this.email?.value, this.otp).subscribe(
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

    this.influencerService.login(loginData).subscribe(
      response => {
        console.log('Logged in successfully:', response);
        localStorage.setItem('accessToken', response.accessToken);
        // Navigate to the profile page after login
        this.router.navigate(['/after-signup-influencer']);
      },
      error => {
        console.error('Login failed:', error);
        alert('Failed to log in. Please try again.');
      }
    );
  }
}