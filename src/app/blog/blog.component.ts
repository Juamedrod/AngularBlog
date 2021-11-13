import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrPosts: Post[];
  postNumber: number;
  constructor(private postsService: PostService) {
    this.arrPosts = []
    this.postNumber = this.postsService.getNumberOfPosts();
  }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAll();
  }

  onChange($event: Event) {
    console.log(($event.target as HTMLInputElement).value);
    this.arrPosts = this.postsService.getByCategory(($event.target as HTMLInputElement).value);
  }

}
