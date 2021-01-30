import { Post } from './../models/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'News App';
  posts: Post[] = [
    {
      id: 1,
      subtitle: 'Breking News',
      
    },
    {
      id: 2,
      subtitle: 'Business News',
    },
    {
      id: 3,
      subtitle: 'Sports News',
      
    },
  ];

  constructor() {}

}
