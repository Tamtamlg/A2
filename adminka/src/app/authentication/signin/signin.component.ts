import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthDataService } from '../../shared/services/auth-data.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { window } from 'rxjs/operator/window';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  message: Message;

  constructor(private router: Router,
    private authDataService: AuthDataService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = new Message('danger', '');

    // TODO удалить
    if (localStorage.getItem('user')) {
      this.authService.login();
      this.router.navigate(['']);
    }

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.authDataService.gatAuthData(formData.email, formData.password).subscribe((response) => {
      if (response.auth) {
          this.message.text = '';
          localStorage.setItem('user', JSON.stringify(formData.email));
          this.authService.login();
          this.router.navigate(['']);
      } else {
        this.showMessage('Incorrect email or password');
      }
    });

  }

}
