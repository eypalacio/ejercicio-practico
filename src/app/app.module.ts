import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { setContext } from '@apollo/client/link/context'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { GraphQLModule } from './graphql.module'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { AuthorPipe } from './pipes/author/author.pipe';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';

const auth = setContext((headers) => {
  return {
    headers: {
      Authorization: `Bearer a923887312d1c205ad2753cd342167f6c11bf664288f24b07e9414735fb12908`
    }
  }
})

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    AuthorPipe,
    UserComponent,
    CommentsComponent,
    FormPostComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
  ],
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
