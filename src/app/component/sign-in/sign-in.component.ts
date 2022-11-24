import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInData={
  email: '',
  password: ''
}

constructor(private userService: UserService, private router: Router) { 

}

  ngOnInit(): void {
  }

  onSignIn(): void{
    this.userService.signIn(this.signInData.email,  this.signInData.password).subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('fullname', data.fullname);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.username);
        this.router.navigateByUrl('/home');
        
      });
  }

}
