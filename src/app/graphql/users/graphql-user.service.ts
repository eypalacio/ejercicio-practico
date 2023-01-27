import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { graphql_user, graphql_users_response, graphql_user_response_by_id } from "./graphql-user.model";
import { CREATE_USER, GET_USERS, GET_USER_BY_ID } from "./graphql-user.queries";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private apollo: Apollo) { }

    /**
     * @params no requiere
     * @returns Retorna todos los usuarios del sistema con sus datos
     */
    get_all_users(): Observable<graphql_user[]> {
        return this.apollo.query<graphql_users_response>({ query: GET_USERS })
            .pipe(map((m)=> m.data.users.nodes));
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    get_user_by_id(id: number): Observable<graphql_user>{
        return this.apollo.query<graphql_user_response_by_id, {id: number}>({
            query: GET_USER_BY_ID, variables: {
                id
            }
        }).pipe(map((m) => m.data.user))
    }

    create_user(name: string, email: string, gender: string, status: string): Observable<any>{
        return this.apollo.mutate<graphql_user>({
            mutation: CREATE_USER,
            variables: {
              name: name,
              email: email,
              gender: gender,
              status: status,
            }
          }).pipe(map((m) => m.data));
        }
}  