import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postNumber: number;
  constructor(private postsService: PostService) {
    this.postNumber = this.postsService.getNumberOfPosts();
  }

  ngOnInit(): void {
  }

}
