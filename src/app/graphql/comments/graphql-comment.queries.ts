import { gql } from "apollo-angular";

const GET_COMMENTS = gql`
query{
    comments{
        edges{
            node{
                id
                post_id
                name
                email
                body
            }
        }
    }
}`

const DELETE_COMMENT = gql`
mutation deleteComment($id: number){
    deleteComment(
        input: {
            id:$id
        }
    ){
        comment{
            id
            post_id
            name
            email
            body
        }
    }
}`

export { GET_COMMENTS, DELETE_COMMENT }