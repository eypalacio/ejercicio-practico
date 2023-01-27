import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { list_animation, open_close } from 'src/app/animation';
import { graphql_todo } from 'src/app/graphql/todos/graphpql-todo.model';
import { TodoService } from 'src/app/graphql/todos/graphql-todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [open_close, list_animation]
})
export class TodoComponent implements OnInit {

  todo_list: graphql_todo[] = []
  show_form: boolean = false;
  
  constructor(private todo_service: TodoService) { }

  ngOnInit(): void {
    this.load_todos();
  }

  load_todos() {
    this.todo_service.get_all_todos().subscribe(result => {
      this.todo_list = result;
    })
  }

  check_todo(item: graphql_todo) {
    this.todo_service.update_todo(item.id, item.status == 'pending' ? 'completed' : 'pending').subscribe(result => {
      this.load_todos()
    })
  }

  delete_todo(id: number) {
    this.todo_service.delete_todo(id).subscribe(result => {
      this.todo_list = this.todo_list.filter(e => e.id != id);
      this.load_todos();
    })
  }

  action(event: graphql_todo) {
    if (event) {
     this.load_todos();
    } this.show_form = false;
  }

}
