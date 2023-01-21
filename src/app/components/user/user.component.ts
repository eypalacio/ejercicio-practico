import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/graphql/users/graphql-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user_list: any[] = []
  
  constructor(private user_service: UserService) { }

  ngOnInit(): void {
    this.user_service.get_all_users().subscribe(result =>{
      this.user_list = result;
      console.log(result);
      
    })
  }

}
