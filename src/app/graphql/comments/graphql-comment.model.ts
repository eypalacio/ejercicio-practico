export interface graphql_comments {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
}

export interface graphql_response {
    comments: {
        edges: [
            node: graphql_comments
        ]
    }
}