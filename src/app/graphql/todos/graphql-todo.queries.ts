import { gql } from "apollo-angular";

const GET_TODOS = gql`
query{
    todos{
        nodes{
            id
            title
            status
            dueOn
            user{
                id
                name
            }
        }
    }
}
`

const CREATE_TODO = gql`
mutation createTodo($title: String!, $status: String!, $dueOn: ISO8601DateTime!, $userId: Int!){
    createTodo(
        input: {
            title: $title
            status: $status
            dueOn: $dueOn
            userId: $userId
        }
    ){
        todo {
            id
            title
            status
            dueOn
            userId
        }
    }
}
`

const DELETE_TODO = gql`
mutation deleteTodo($id: Int!){
    deleteTodo(
        input: {
            id: $id
        }
    ){
        todo{
            id
            title
            status
            dueOn
            userId
        }
    }
}
`

const UPDATE_TODO = gql`
mutation updateTodo($id: Int!, $status: String!){
    updateTodo(
        input: {
            id: $id
            status: $status
        }
    ){
        todo{
            id
            title
            status
            dueOn
            userId
        }
    }
}
`

export {GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO}