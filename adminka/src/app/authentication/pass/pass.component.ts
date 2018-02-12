import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthDataService } from '../../shared/services/auth-data.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { window } from 'rxjs/operator/window';
import { ActivatedRoute } from '@angular/router';
import { SendDataService } from '../../shared/services/send-data.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {

  public form: FormGroup;
  message: Message;

  constructor(private router: Router,
    private authDataService: AuthDataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private resetPasswordService: SendDataService) { }

  ngOnInit() {
    this.message = new Message('success', '');

    this.form = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl(null, [Validators.required])
    }, this.passwordConfirmValidator);
  }

  showMessage(text: string, type: string = 'success') {
    this.message = new Message(type, text);
    setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  passwordConfirmValidator(g: FormGroup) {
     return g.get('password').value === g.get('confirmPassword').value
        ? null : {'mismatch': true};
  }

  onSubmit() {
    const formData = this.form.value;

    // console.log(this.form)

    this.resetPasswordService.sendData(formData.password);

    this.showMessage('Your password has been changed successfully');

  }

}
