import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/graphql/posts/graphql-post.service';
import { PostCommentsService } from 'src/app/services/post-comments.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  })
  constructor(
    private post_service: PostService,
    private post_comment_service: PostCommentsService,
    ) { }

  ngOnInit(): void {

    this.form.valueChanges.subscribe(result => {
      console.log(result);

    })
  }

  create_post() {
    this.post_service.create_posts(
      this.form.get('title')?.value,
      this.form.get('body')?.value,
      this.form.get('userId')?.value)
      .subscribe(result => {
        console.log(result);
      })
  }

  cancel(){
    this.post_comment_service.cancel_new_post();
  }

}
