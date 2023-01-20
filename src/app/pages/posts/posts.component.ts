import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { graphql_post } from 'src/app/graphql/posts/graphql-post.model';
import { PostService } from 'src/app/graphql/posts/graphql-post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  author_filter: FormControl = new FormControl();
  post_list: any[] = []
  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.load_posts()
    // this.autor_filter.valueChanges().subscribe(result=>{
    //   console.log(result);
      
    // })
  }

  load_posts() {
    this.post.get_all_posts().subscribe(result => {
      console.log(result);
      
      this.post_list = result.map((m) => m.node);
    });
  }

}
