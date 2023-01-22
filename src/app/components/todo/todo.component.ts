import { Component, OnInit } from '@angular/core';
import { graphql_todo } from 'src/app/graphql/todos/graphpql-todo.model';
import { TodoService } from 'src/app/graphql/todos/graphql-todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo_list: graphql_todo[] = []
  constructor(private todo_service: TodoService) { }

  ngOnInit(): void {
    this.load_todos();
  }

  load_todos(){
    this.todo_service.get_all_todos().subscribe(result =>{
      this.todo_list = result;
    })
  }

}
