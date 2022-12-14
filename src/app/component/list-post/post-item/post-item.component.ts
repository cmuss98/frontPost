import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input()
  post:IPost | any;

  constructor() { }

  ngOnInit() {
  }

}
