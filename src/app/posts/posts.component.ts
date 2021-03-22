import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void{
    this.postService.getPosts()
    .subscribe(
      res =>{
        this.posts = res.body;
      },
      error => {
        alert('An unexpected error occured.');
      }
    );
  }

  createPost(input: HTMLInputElement): void{
    let post: any = {title: input.value};
    input.value = '';
    this.postService.creatPost(post)
    .subscribe(res => {
      console.log(res);
      this.posts.splice(0, 0, res)
    }, error => {
      alert('An unexpected error occured.');
    });
  }

  updatePost(post: any){
    this.postService.updatePost(post)
      .subscribe(res => {
        console.log(res);
      }, (error: Response) => {
        if(error.status === 400)
          console.log(error.json());
            
        // this.form.setErrors(error.json())
        alert('An unexpected error occured.');
      })
  }
  
  deletePost(post: any){
    console.log("post from page:", post);
    
    this.postService.deletePost(post.id)
      .subscribe(res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error.status === 404)
          alert('This post has already been deleated')
        alert('An unexpected error occured.');
      })
  }
}
