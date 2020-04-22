import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] =  [
    {title: 'Хочу выучить Angular', text: 'Учусь', id: 1},
    {title: 'Следующий блок', text: 'Директивы и пайпы', id: 2}
  ]
  updatePosts(post:Post) {
    this.posts.unshift(post)
    console.log('Post', post)
  }
}
