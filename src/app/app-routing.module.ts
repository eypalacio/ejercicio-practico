import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UserComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'newtask', component:  FormTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
