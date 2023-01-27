import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { graphql_comments, graphql_comments_response } from "./graphql-comment.model";
import { DELETE_COMMENT, GET_COMMENTS } from "./graphql-comment.queries";

@Injectable({
    providedIn: 'root'
})

export class CommentsService {

    constructor(private apollo: Apollo) { }

    /**
     * 
     * @returns 
     */
    get_all_comments(): Observable<graphql_comments[]> {
        return this.apollo.query<graphql_comments_response>({ query: GET_COMMENTS }).pipe(map((m) => m.data.comments.nodes))
    }

    /**
     * 
     * @param id 
     */
    delete_comments(id: number): Observable<any> {
        return this.apollo.mutate<graphql_comments_response>({
            mutation: DELETE_COMMENT,
            variables: {
                id: id,
            }
        }).pipe(map((m) => m.data?.comments))
    }

}
