import { graphql_user } from "../users/graphql-user.model";

export interface graphql_post {
    id: number;
    user: graphql_user;
    title: string;
    body: string;
}

export interface graphql_posts_response {
    posts: {
        edges: []
    }
}

export interface graphql_post_by_id_response {
    post: graphql_post
}

export interface graphql_post_node{
    node: graphql_post
}
