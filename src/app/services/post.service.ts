import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get(this.url, {observe: 'response'});
  }

  creatPost(post: any){
    return this.http.post(this.url, post)
  }

  updatePost(post:any){
    return this.http.patch(this.url + '/' + post.id, post.body)
  }

  deletePost(id:any){
    return this.http.delete(this.url + '/' + id, {observe: 'response'})
  }
}
