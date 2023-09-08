import { Component } from '@angular/core';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.css']
})
export class HeaderPrivateComponent {
constructor(public loginSvc: LoginService){

}
}
