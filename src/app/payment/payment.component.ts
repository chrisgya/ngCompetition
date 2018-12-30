import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

   paymentForm: FormGroup;
  displayMessage: string;


  constructor(private fb: FormBuilder) { 

    this.paymentForm = this.fb.group({
      cardName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      cardNumber: ['',  [Validators.required,Validators.pattern(/^\d{16,16}$/)]],
      expiryMonth: ['', [Validators.required,Validators.max(12), Validators.pattern(/^\d{2,2}$/)]],
      expiryYear: ['',  [Validators.required,Validators.pattern(/^\d{4,4}$/)]], //year is meant to be 4 digits though the instruction suggested 2 which I think it is a mistake
      cvv: ['',  [Validators.required,Validators.pattern(/^\d{3,3}$/)]]
    });
  }

   inValid(name) {
    return this.paymentForm.get(name).invalid && (this.paymentForm.get(name).touched || this.paymentForm.get(name).dirty);
  }

  submitForm() {
    /* Change the display message on button click / submit form */

    if (this.paymentForm.valid) {
      console.warn(this.paymentForm.value);
      this.displayMessage = 'Payment successful!';
      this.paymentForm.reset(true);
    } else {
      this.displayMessage = 'Payment failed!';
    }
   
  }

}
