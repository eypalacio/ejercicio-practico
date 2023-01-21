// service to comunicate posts and comments components
import { EventEmitter, Injectable } from '@angular/core';
import { graphql_comments } from '../graphql/comments/graphql-comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {

 emisor = new EventEmitter<graphql_comments[]>();
  constructor() { }

  send_comments(comments: graphql_comments[]) {
    this.emisor.emit(comments);
  }
}
