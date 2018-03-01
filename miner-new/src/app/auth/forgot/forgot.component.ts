import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Message } from '../../shared/models/message.model';
import { AuthDataService } from '../../shared/services/auth-data.service';

@Component({
  selector: 'wfm-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;
  message: Message;

  constructor(
    private router: Router,
    private forgotPasswordService: AuthDataService) {}

  ngOnInit() {
    this.message = new Message('success', '');

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  showMessage(text: string, type: string = 'success') {
    this.message = new Message(type, text);
  }

  onSubmit() {

    const formData = this.form.value;

    this.forgotPasswordService.forgotPassword(formData.email);

    this.showMessage('Your password reset link has been sent to you. Please check your inbox.');

    this.form.reset();
  }

}
