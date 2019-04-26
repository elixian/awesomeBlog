import { Component } from '@angular/core';
import { Post } from './components/classes/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private date:Date= new Date();
  POSTS:Array<Post>= [
    {title:"Mon premier post",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id justo varius, egestas lorem eget, rhoncus leo. Sed eget leo vel diam sodales porta sed vel mi. Ut molestie iaculis pulvinar. Maecenas lectus urna, rhoncus eget purus eget, suscipit lobortis nulla. ",loveIts:0,created_at:this.date},
    {title:"Mon second post",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id justo varius, egestas lorem eget, rhoncus leo. Sed eget leo vel diam sodales porta sed vel mi. Ut molestie iaculis pulvinar. Maecenas lectus urna, rhoncus eget purus eget, suscipit lobortis nulla. ",loveIts:0,created_at:this.date},
    {title:"Mon troisième post",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id justo varius, egestas lorem eget, rhoncus leo. Sed eget leo vel diam sodales porta sed vel mi. Ut molestie iaculis pulvinar. Maecenas lectus urna, rhoncus eget purus eget, suscipit lobortis nulla. ",loveIts:0,created_at:this.date}
  ]
  title = 'awesomeBlog';
  constructor(){
    this.date = new Date();
  }
  getPosts():Array<Post>{
    return this.POSTS;
  }
}
