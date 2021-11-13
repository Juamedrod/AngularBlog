import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

const LS_ITEM: string = 'arrPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[] = [];
  postNumber: number = 0;

  constructor() {
    this.arrPosts = this.retrieveDataFromLocalStorage();//Set-up inicial
    this.postNumber = this.arrPosts.length;
  }

  create(post: Post): void {
    this.arrPosts.push(post);
    this.loadDatatoLocalStorage(this.arrPosts);
  }

  getAll(): Post[] {
    return this.retrieveDataFromLocalStorage();
  }

  getByCategory(category: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === category);
  }

  getNumberOfPosts(): number {
    return this.postNumber;
  }

  retrieveDataFromLocalStorage(): Post[] {
    if (localStorage.getItem(LS_ITEM)) {
      return JSON.parse(localStorage.getItem(LS_ITEM)!);
    } else {
      return [];
    }
  }

  loadDatatoLocalStorage(arrPosts: Post[]) {
    localStorage.setItem(LS_ITEM, JSON.stringify(arrPosts));
  }
}

