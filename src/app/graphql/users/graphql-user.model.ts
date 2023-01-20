//datos del usuario
export interface graphql_user {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string
}

//response formato de la query
export interface graphql_users_response {
    users: {
        edges: [];
    }
}

export interface graphql_user_response_by_id {
    user: graphql_user;
}

export interface graphql_user_node {
    node: graphql_user;
}

