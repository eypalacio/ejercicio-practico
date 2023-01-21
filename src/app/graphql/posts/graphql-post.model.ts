import { graphql_comments } from "../comments/graphql-comment.model";
import { graphql_user } from "../users/graphql-user.model";

export interface graphql_post {
    id: number;
    user: graphql_user;
    title: string;
    body: string;
    comments: {
        nodes: graphql_comments
        totalCount: number
    }
}

export interface graphql_posts_response {
    posts: {
        nodes: []
    }
}

export interface graphql_post_by_id_response {
    post: graphql_post
}

export interface graphql_post_response_create {
    createPost: {
        post: graphql_post
    }
}
