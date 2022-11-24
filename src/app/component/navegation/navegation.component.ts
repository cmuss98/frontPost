import { Router } from '@angular/router';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/home');
    
  }

}
