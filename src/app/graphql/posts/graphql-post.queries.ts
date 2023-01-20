import { gql } from "apollo-angular";

const GET_POSTS = gql`
query{
    posts{
        edges{
            node{
                id
                title
                body
                user{
                    id
                    name
                    email
                }
            }
        }
    }
}
`
const GET_POST_BY_ID = gql`
query get_post_by_id($id: ID!){
    post(id: $id) {
        title
        body
        user{
            id
            name
            email
        }
    }
}
`

const GET_POST_BY_USER_ID = gql`
query get_post_by_user_id($userId: number!){
    post(userId: $userId) {
        title
        body
        user{
            id
            name
            email
        }
    }
}
`

const CREATE_POST = gql`
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
export { GET_POSTS, CREATE_POST, DELETE_POST, GET_POST_BY_ID, GET_POST_BY_USER_ID }

