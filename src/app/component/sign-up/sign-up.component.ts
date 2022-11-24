import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(private userService: UserService) { 

  }

  signUpData={
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    fullName: ''
  }



  ngOnInit(): void {
  }

  onSubmit(): void{
      this.userService.signUp(this.signUpData.userName,this.signUpData.email,  this.signUpData.password, 
        this.signUpData.phoneNumber, this.signUpData.fullName).subscribe(data => {
          console.log(data)
        });
    }
    
}
