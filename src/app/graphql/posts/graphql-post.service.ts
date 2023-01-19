import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { graphql_post, graphql_post_response } from "./graphql-post.model";
import { ADD_POST, DELETE_POST, GET_POSTS } from "./graphql-post.queries";

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor(private post: Apollo) { }

    /**
     * 
     * @returns 
     */
    get_all_post(): Observable<graphql_post[]> {
        return this.post.query<graphql_post_response>({ query: GET_POSTS }).pipe(map((m) => m.data.posts.edges))
    }

    /**
     * 
     * @param title 
     * @param body 
     */
    add_post(title: string, body: string) {
        this.post.mutate<graphql_post_response>({
            mutation: ADD_POST,
            variables: {
                title: title,
                body: body,
            }
        }).pipe(map((m)=> m.data?.posts))
    }


    del_post(id: number){
        this.post.mutate<graphql_post_response>({
            mutation: DELETE_POST,
            variables: {
                id: id,
            }
        }).pipe(map((m)=> m.data?.posts))
    }
}
