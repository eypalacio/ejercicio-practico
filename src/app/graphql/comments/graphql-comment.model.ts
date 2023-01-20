export interface graphql_comments {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface graphql_comments_response {
    comments: {
        edges: []
    }
}

export interface graphql_comments_node{
    node: graphql_comments
}