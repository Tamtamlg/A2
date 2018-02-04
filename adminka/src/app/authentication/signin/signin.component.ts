import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { window } from 'rxjs/operator/window';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  message: Message;

  constructor(private router: Router, private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    // window.setTimeout(() => {
    //   this.message.text = '';
    // }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email).subscribe((user: User) => {
      if (user) {
        if (user.password === formData.password) {
          // this.message.text = '';
          // window.localStorage.setItem('user',JSON.stringify(user))
          // this.authService.login();
          this.router.navigate ( [ './email' ] );
        } else {
          this.showMessage('Incorrect password')
        }
      } else {
        this.showMessage('Incorrect email')
      }
    })

    
  }

}
