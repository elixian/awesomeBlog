import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../classes/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() itemPost:Post;
  constructor() { }

  ngOnInit() {
  }
  addLike(){
    this.itemPost.loveIts ++;
  }
  reduceLike(){
    this.itemPost.loveIts --;
  }
}
