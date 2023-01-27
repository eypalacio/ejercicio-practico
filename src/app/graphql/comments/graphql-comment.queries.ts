import { gql } from "apollo-angular";

const GET_COMMENTS = gql`
query{
    comments{
            nodes{
                id
                postId
                name
                email
                body
            }
    }
}`


const DELETE_COMMENT = gql`
mutation deleteComment($id: Int!){
    deleteComment(
        input: {
            id:$id
        }
    ){
        comment{
            id
            postId
            name
            email
            body
        }
    }
}`

export { GET_COMMENTS, DELETE_COMMENT }