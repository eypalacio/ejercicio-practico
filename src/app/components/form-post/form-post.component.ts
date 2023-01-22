import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { open_close } from 'src/app/animation';
import { PostService } from 'src/app/graphql/posts/graphql-post.service';
import { graphql_user } from 'src/app/graphql/users/graphql-user.model';
import { UserService } from 'src/app/graphql/users/graphql-user.service';
import { PostCommentsService } from 'src/app/services/post-comments.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss'],
  animations: [open_close]
})
export class FormPostComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  })

  user_list: graphql_user[] = [];

  constructor(
    private post_service: PostService,
    private post_comment_service: PostCommentsService,
    private user_service: UserService,
  ) { }

  ngOnInit(): void {
    this.load_users();
  }

  create_post() {
    this.post_service.create_posts(
      this.form.get('title')?.value,
      this.form.get('body')?.value,
      this.form.get('userId')?.value)
      .subscribe(result => {
        this.post_comment_service.cancel_new_post('accepted');

      })
  }

  cancel() {
    this.post_comment_service.cancel_new_post('');
  }

  load_users() {
    this.user_service.get_all_users().subscribe(result => {
      this.user_list = result
    })
  }

}
