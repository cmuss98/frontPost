import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  allPost: IPost[]=[]

  constructor(private postService: PostService) { }

  ngOnInit(): void{
    this.postService.getAllPosts()
      .subscribe(data => {
        console.log(data)
        if(data){
          this.allPost=data;
        }
      });
    
  }

}
