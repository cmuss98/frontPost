import { IPost } from './../../models/post';
import { UserService } from './../../Services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
@Input()
  posts:IPost[]=[]

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    console.log('test', this.posts)
  }

}
