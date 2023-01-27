import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { graphql_post, graphql_post_by_id_response, graphql_posts_response, graphql_post_response_create } from "./graphql-post.model";
import { CREATE_POST, DELETE_POST, GET_POSTS, GET_POST_BY_ID } from "./graphql-post.queries";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private apollo: Apollo) { }

    /**
     * @params no requiere
     * @returns Retorna todos los posts del sistema con sus datos
     */
    get_all_posts(): Observable<graphql_post[]> {
        return this.apollo.query<graphql_posts_response>({ query: GET_POSTS })
            .pipe(map((m) => m.data.posts.nodes));
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    get_post_by_id(id: number): Observable<graphql_post> {
        return this.apollo.query<graphql_post_by_id_response, { id: number }>({
            query: GET_POST_BY_ID, variables: {
                id
            }
        }).pipe(map((m) => m.data.post))
    }


    /**
     * 
     * @param title 
     * @param body 
     * @param userId 
     * @returns 
     */
    create_posts(title: string, body: string, userId: string): Observable<any> {
        return this.apollo.mutate<graphql_post>({
            mutation: CREATE_POST,
            variables: {
                title: title.toString(),
                body: body.toString(),
                userId: parseInt(userId),
            }
        }).pipe(map((m) => {
            console.log(m);
            
            return m.data}));
    }
    

    /**
     * 
     * @param id 
     * @returns 
     */
    delete_post(id: number): Observable<any>{
        return this.apollo.mutate<graphql_post>({
            mutation: DELETE_POST,
            variables: {
                id: id,
            }
        }).pipe(map((m) => m.data))
    }
}  