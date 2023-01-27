import { Component, Input, OnInit } from '@angular/core';
import { list_animation, open_close } from 'src/app/animation';
import { CommentsService } from 'src/app/graphql/comments/graphql-comments.service';
import { PostCommentsService } from 'src/app/services/post-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [open_close]
})
export class CommentsComponent implements OnInit {

  comments_list: any[] = [];

  constructor(
    private comment_service: CommentsService, //Graphql
    private post_comment_service: PostCommentsService, 
  ) { }

  ngOnInit(): void {
    this.post_comment_service.comments_emitter.subscribe(result => {
      this.comments_list = result;
    })
  }

  delete_comment(id: number){
    this.comment_service.delete_comments(id).subscribe(resul =>{
      this.comments_list = this.comments_list.filter( e => e.id != id)
    })
  }
}
