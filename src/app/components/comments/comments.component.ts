import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/graphql/comments/graphql-comments.service';
import { PostCommentsService } from 'src/app/services/post-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments_list: any[] = [];

  constructor(
    private comment_service: CommentsService,
    private post_comment_service: PostCommentsService,
  ) { }

  ngOnInit(): void {
    this.post_comment_service.comments_emitter.subscribe(result => {
      this.comments_list = result;
    })
  }
}
