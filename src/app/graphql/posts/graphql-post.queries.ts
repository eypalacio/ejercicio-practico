import { gql } from "apollo-angular";

const GET_POSTS = gql`
query{
    posts{
        edges{
            node{
                id
                user_id
                title
                body
            }
        }
    }
}
`
const ADD_POST = gql`
mutation createPost($title: String!, $body: String!, $userId: number!){
    createPost(
        input: {
            title: $title
            body: $body
            userId: $userId
        }
    ){
        post{
            id
            title
            body
            userId
        }
    }
}
`

const DELETE_POST = gql`
mutation deletePost($id: number){
    deletePost(
        input: {
            id:$id
        }
    ){
        post{
            id
            title
            body
            userId
        }
    }
}
`

