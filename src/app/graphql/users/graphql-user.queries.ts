import { gql } from "apollo-angular";

const GET_USERS = gql`
query{
    users{
        edges{
            node{
                id
                name
                email
                gender
                status
            }
        }
    }
}
`

const GET_USER_BY_ID = gql`
query get_user_by_id($id: ID!){
    user(id: $id) {
        name
        enmail
        gender
        status
    }
}
`
// const GET_CANT_POST_USER = gql``


export { GET_USERS, GET_USER_BY_ID}