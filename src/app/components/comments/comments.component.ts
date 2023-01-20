import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/graphql/comments/graphql-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments_list: any[]=[];

  constructor(private comment: CommentsService) { }

  ngOnInit(): void {
    this.comment.get_all_comments().subscribe(result => {
      console.log(result);
      
      this.comments_list = result.map((m) => m.node);
    });
  }

}
