import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { graphql_comments } from 'src/app/graphql/comments/graphql-comment.model';
import { CommentsService } from 'src/app/graphql/comments/graphql-comments.service';
import { graphql_post } from 'src/app/graphql/posts/graphql-post.model';
import { PostService } from 'src/app/graphql/posts/graphql-post.service';
import { PostCommentsService } from 'src/app/services/post-comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  author_filter: FormControl = new FormControl();
  post_list: any[] = []
  new_post: boolean = false;

  constructor(
    private post_service: PostService,
    private post_comment_service: PostCommentsService,
  ) { }

  ngOnInit(): void {
    this.load_posts()
  }

  load_posts() {
    this.post_service.get_all_posts().subscribe(result => {
      console.log(result);

      this.post_list = result.map((m) => m);
    });
  }

  get_comments(commnents: graphql_comments[]) {
    this.post_comment_service.send_comments(commnents);
  }

}
