import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/graphql/posts/graphql-post.service';

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
  constructor(private post_service: PostService) { }

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

}
