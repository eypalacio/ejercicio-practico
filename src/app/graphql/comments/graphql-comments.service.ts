import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { graphql_comments, graphql_response } from "./graphql-comment.model";
import { DELETE_COMMENT, GET_COMMENTS } from "./graphql-comment.queries";

@Injectable({
    providedIn: 'root'
})

export class CommentsService {

    constructor(private comment: Apollo) { }

    /**
     * 
     * @returns 
     */
    get_all_comments(): Observable<graphql_comments[]>{
        return  this.comment.query<graphql_response>({ query: GET_COMMENTS}).pipe(map((m) => m.data.comments.edges))
    }

    /**
     * 
     * @param id 
     */
    delete_post(id: number) {
        this.comment.mutate<graphql_response>({
            mutation: DELETE_COMMENT,
            variables: {
                id: id,
            }
        }).pipe(map((m) => m.data?.comments))
    }

}
