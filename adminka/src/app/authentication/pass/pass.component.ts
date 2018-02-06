import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { window } from 'rxjs/operator/window';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {

  public form: FormGroup;
  message: Message;

  constructor(private router: Router,
    private usersService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = new Message('success', '');

    this.form = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
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

    // this.usersService.getUserByEmail(formData.email).subscribe((user: User) => {
    //   if (user) {
    //     if (user.password === formData.password) {
    //       this.message.text = '';
    //       localStorage.setItem('user', JSON.stringify(user.email));
    //       this.authService.login();
    //       this.router.navigate(['']);
    //     } else {
    //       this.showMessage('Incorrect password');
    //     }
    //   } else {
    //     this.showMessage('We can\'t find this email address in our database');
    //   }
    // });

    this.showMessage('Your password has been changed successfully');
    console.log(this.form);

  }

}
