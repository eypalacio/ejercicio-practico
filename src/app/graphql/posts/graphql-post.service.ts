import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { graphql_post, graphql_post_by_id_response, graphql_posts_response, graphql_post_node } from "./graphql-post.model";
import { CREATE_POST, GET_POSTS, GET_POST_BY_ID, GET_POST_BY_USER_ID } from "./graphql-post.queries";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private apollo: Apollo) { }

    /**
     * @params no requiere
     * @returns Retorna todos los posts del sistema con sus datos
     */
    get_all_posts(): Observable<any[]> {
        return this.apollo.query<graphql_posts_response>({ query: GET_POSTS })
            .pipe(map((m) => m.data.posts.edges));
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
     * @param userId 
     * @returns 
     */
    get_post_by_user_id(userId: number): Observable<graphql_post> {
        return this.apollo.query<graphql_post_by_id_response, { userId: number }>({
            query: GET_POST_BY_USER_ID, variables: {
                userId
            }
        }).pipe(map((m) => m.data.post))
    }

    create_posts(title: string, body: string, userId: number): Observable<any> {
        return this.apollo.mutate<graphql_post>({
            mutation: CREATE_POST,
            variables: {
                title: title,
                body: body,
                userId: userId,
            }
        }).pipe(map((m) => m.data));
    }
}  