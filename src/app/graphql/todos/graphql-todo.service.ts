import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { CREATE_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from "./graphql-todo.queries";
import { graphql_todo, graphql_todo_response } from "./graphpql-todo.model";

@Injectable({
    providedIn: 'root'
})

export class TodoService {

    constructor(private apollo: Apollo) { }

    /**
 * @params no requiere
 * @returns Retorna todos los posts del sistema con sus datos
 */
    get_all_todos(): Observable<graphql_todo[]> {
        return this.apollo.query<graphql_todo_response>({ query: GET_TODOS })
            .pipe(map((m) => m.data.todos.nodes));
    }

    /**
     * 
     * @param title 
     * @param body 
     * @param userId 
     * @returns 
     */
    create_todo(title: string, dueOn: Date, userId: string, status: string): Observable<any> {
        return this.apollo.mutate<graphql_todo>({
            mutation: CREATE_TODO,
            variables: {
                title: title.toString(),
                dueOn: dueOn.toString(),
                userId: parseInt(userId),
                status: status,
            }
        }).pipe(map((m) => {
            console.log(m);

            return m.data
        }));
    }

    /**
     * 
     * @param title 
     * @param status 
     * @param dueOn 
     * @param userId 
     * @returns 
     */
    update_todo(id: number, status: string): Observable<any> {
        return this.apollo.mutate<graphql_todo>({
            mutation: UPDATE_TODO,
            variables: {
                id: id,
                status: status,
            }
        }).pipe(map((m) => {
            console.log(m);

            return m.data
        }));
    }



    /**
 * 
 * @param id 
 * @returns 
 */
    delete_todo(id: number): Observable<any> {
        return this.apollo.mutate<graphql_todo>({
            mutation: DELETE_TODO,
            variables: {
                id: id,
            }
        }).pipe(map((m) => m.data))
    }


}