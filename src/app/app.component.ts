import { Component } from '@angular/core';
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lemoncode-master-frontend-04-frameworks-angular';

  constructor(public loginSvc: LoginService) {}
}
