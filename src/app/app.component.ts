import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase';
  todos: any[]=[];
  todoInput: string='';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getData ();
  }

  getData() {
    this.todoService.getData().subscribe((data) => {
      this.todos = data;
    });
  }

  onSubmit() {
    this.todoService.addData(this.todoInput)
      .then((res) => console.log("insert data") )
      .catch((error) => console.error(error))

      this.todoInput = ''
  }

  onDelete(id: string) {
    this.todoService.deleteData(id)
    .then((res) => console.log("deleted data"))
    .catch((error) => console.error(error));
  }
}
