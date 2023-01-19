export interface graphql_post {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

export interface graphql_post_response {
    posts: {
        edges: [
            node: graphql_post
        ]
    }
}

export interface graphql_post_response_by_user_id {
    post: graphql_post
}