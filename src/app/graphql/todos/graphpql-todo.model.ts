import { gql } from "apollo-angular";
import { graphql_user } from "../users/graphql-user.model";

export interface graphql_todo {
    id: number;
    status: string;
    title: string;
    dueOn: Date;
    user: graphql_user;
}

export interface graphql_todo_response {
    todos: {
        nodes: []
    }
}