import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, from, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';

const uri = 'https://gorest.co.in/public/v2/graphql'; // <-- add the URL of the GraphQL server here
const auth = setContext((headers) => {
  return {
    headers: {
      Authorization: `Bearer a923887312d1c205ad2753cd342167f6c11bf664288f24b07e9414735fb12908`
    }
  }
})


export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        const link = ApolloLink.from([auth, httpLink.create({
          uri: 'https://gorest.co.in/public/v2/graphql'
        })])
        return {
          cache: new InMemoryCache(),
          link: link
        }
      },
      deps: [HttpLink]
    },
  ],
})
export class GraphQLModule { }
