import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private apollo: Apollo) { }
  
  ngOnInit(): void {
    // this.apollo.watchQuery({
    //   query: GET_USERS
    // }).valueChanges.subscribe(({data, error}: any) =>{
    //   console.log(data.users);
    //   console.log(data);

    // })
  }
}
