import { gql } from "apollo-angular";

const GET_USERS = gql`
query{
    users{
        nodes{
            id
            name
            gender
            status
            email
            posts{
                totalCount
                nodes{
                   id
                   title
                   body
                   user{
                    id
                    name
                   }
                   comments{
                    nodes{
                        name
                        body
                        email
                        id
                    }
                   } 
                }
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
const CREATE_USER = gql`
mutation createUser($name: String!, $email: String!, $gender: String!, $status: String!){
    createUser(
        input: {
            name: $name
            email: $email
            gender: $gender
            status: $status
        }
    ){
        user{
            id
            name
            email
            gender
            status
        }
    }
}
`

export { GET_USERS, GET_USER_BY_ID, CREATE_USER }