
//datos del usuario
export interface graphql_user {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
    posts: {
        totalCount: number
    }
}

//response formato de la query
export interface graphql_users_response {
    users: {
        nodes: [];
    }
}

export interface graphql_user_response_by_id {
    user: graphql_user;
}

