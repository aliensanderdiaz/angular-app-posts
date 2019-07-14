import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    console.log('Submit');
    if (form.invalid) {
    console.log('Submit Invalido');
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    console.log(post);
    this.postsService.addPost(post.title, post.content);
    form.resetForm();
  }

}
