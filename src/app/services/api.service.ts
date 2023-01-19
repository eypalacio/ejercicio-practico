import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';

export interface users_graphl {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface graphql_users_response {
  users: {
    edges: [];
  };
}

export interface graphql_user_response_by_id {
  user: users_graphl;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  /**
   *
   * @returns Retorna todos los usuarios del sistema con sus datos
   */
  getDataUser(): Observable<users_graphl[]> {
    return this.apollo
    .query<graphql_users_response>({ query: GET_USERS })
    .pipe(map((m) => m.data.users.edges));
  }

  getUserById(id: number): Observable<users_graphl> {
    return this.apollo
      .query<graphql_user_response_by_id, { id: number }>({
        query: GET_USER_BY_ID,
        variables: {
          id,
        },
      })
      .pipe(map((m) => m.data.user));
  }

  addUser(name: string, email: string, gender: string, status: string): Observable<users_graphl>{
    this.apollo.mutate<graphql_user_response_by_id>({
      mutation: ADD_USER,
      variables: {
        name: name,
        email: email,
        gender: gender,
        status: status,
      }
    }).pipe(map((m) => m.data.user));
  }
}
