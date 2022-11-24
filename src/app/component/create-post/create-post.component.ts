import { Router } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/Services/post.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, private strore: Store<IAppState>, private router: Router) { }

  postData: IPost={
    title: '',
    image: '',
    content: '',
    id: 0,
    creationDate: new Date,
    userName: ''
  }
  ngOnInit() {
  }
  onSubmit(){
    this.postService.createPost(this.postData.title, this.postData.image, 
      this.postData.content)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home'])
    })
  }

}
