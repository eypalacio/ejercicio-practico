import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { graphql_user } from 'src/app/graphql/users/graphql-user.model';
import { UserService } from 'src/app/graphql/users/graphql-user.service';
import { PostCommentsService } from 'src/app/services/post-comments.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user_list: any[] = []

  constructor(
    private user_service: UserService, //Graphql
    private posts_comments_service: PostCommentsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.load_users();
  }

  load_users() {
    this.user_service.get_all_users().subscribe(result => {
      this.user_list = result;
      console.log(result);
    })
  }


}
