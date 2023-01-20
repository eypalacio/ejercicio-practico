import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/graphql/users/graphql-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  usuarios: any[] = []
  
  constructor(private apollo: UserService) { }

  ngOnInit(): void {
    this.apollo.get_all_users().subscribe(result =>{
      this.usuarios = result;
    })
  }

}
