import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/graphql/users/graphql-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarios: any[]=[]
  constructor(private user: UserService) { }

  ngOnInit(): void {

    this.user.get_all_users().subscribe(result =>{
      this.usuarios = result
    })


    // this.api.getUserById(3494).subscribe(result=>{
    //   console.log(result);
    // })
  }


}
