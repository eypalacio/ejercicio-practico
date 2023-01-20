import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from 'src/app/graphql/graphql.queries';
import { UserService } from 'src/app/graphql/users/graphql-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  usuarios: any[]= []

  constructor(private apollo: UserService) { }
  
  ngOnInit(): void {
    this.apollo.get_all_users().subscribe(result =>{
      this.usuarios = result;
    })
  }
}
