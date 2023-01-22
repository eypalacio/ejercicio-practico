import { Component, OnInit } from '@angular/core';
import { list_animation, open_close } from 'src/app/animation';
import { SessionStorageService } from 'ngx-webstorage';
import { graphql_user } from 'src/app/graphql/users/graphql-user.model';
import { UserService } from 'src/app/graphql/users/graphql-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [open_close, list_animation]
})
export class UserComponent implements OnInit {

  user_list: graphql_user[] = []

  constructor(
    private user_service: UserService,
    private storage_service: SessionStorageService,
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

  see_post(item: graphql_user){
    this.storage_service.store('post',item.posts.nodes);
    this.router.navigate(['/posts'])
  }


}
