import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/graphql/todos/graphql-todo.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss']
})
export class FormTodoComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    dueOn: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),

  })

  constructor(
    private todo_service: TodoService
    ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(result => {console.log(result);
    })
  }

  create_todo(){
    this.todo_service.create_todo(
      this.form.get('title')?.value,
      this.form.get('dueOn')?.value,
      this.form.get('userId')?.value,
      'pendiente'
    ).subscribe(result =>{console.log(result);
    })
  }

}
