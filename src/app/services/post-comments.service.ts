// service to comunicate posts and comments components
import { EventEmitter, Injectable } from '@angular/core';
import { graphql_comments } from '../graphql/comments/graphql-comment.model';
import { graphql_post } from '../graphql/posts/graphql-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {

 comments_emitter = new EventEmitter<graphql_comments[]>();
 cancel_post_emitter = new EventEmitter<string>();

  constructor() { }

  // send posts comments to comments.component
  send_comments(comments: graphql_comments[]) {
    this.comments_emitter.emit(comments);
  }

  //cancel new post
  cancel_new_post(action: string){
    this.cancel_post_emitter.emit(action);
  }

}
