import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { open_close } from 'src/app/animation';
import { graphql_todo } from 'src/app/graphql/todos/graphpql-todo.model';
import { TodoService } from 'src/app/graphql/todos/graphql-todo.service';
import { graphql_user } from 'src/app/graphql/users/graphql-user.model';
import { UserService } from 'src/app/graphql/users/graphql-user.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss'],
  animations: [open_close]
})
export class FormTodoComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    dueOn: new FormControl(new Date(), Validators.required),
    userId: new FormControl(-1, Validators.required),

  })

  user_list: graphql_user[] = []
  @Output() task_emitter= new EventEmitter<graphql_todo>();

  constructor(
    private todo_service: TodoService,
    private user_service: UserService,
    ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(result => {console.log(result);
    })
    this.load_users()
  }

  create_todo(){
    this.todo_service.create_todo(
      this.form.get('title')?.value,
      this.form.get('dueOn')?.value,
      this.form.get('userId')?.value,
      'pending'
    ).subscribe(result =>{
      this.task_emitter.emit(result);
    })
  }

  load_users(){
    this.user_service.get_all_users().subscribe(result=>{
      this.user_list = result
    })
  }

}
