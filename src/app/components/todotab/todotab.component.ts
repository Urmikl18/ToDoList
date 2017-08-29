import { Component, OnInit, Input, Inject } from '@angular/core';
import { TodotabsComponent } from '../todotabs/todotabs.component';
import { ToDoItem } from '../../services/todolist.service';
import { ItemFilterPipe } from '../../pipes/item-filter.pipe';
import { TodolistService} from '../../services/todolist.service';

@Component({
  selector: 'app-todotab',
  template: `
    <div class="panel-group" [hidden]="!active" style="margin-top:5px">
      <div *ngIf="tasks?.length > 0">
        <div *ngFor = "let task of tasks | itemFilter:tabStatus" [class]="tdl.getStatus(task)">
          <div class="panel-heading">{{task.name}}
            <span class = "glyphicon glyphicon-remove" style="cursor: pointer; float:right;" (click)="this.removeTask(task.id)"></span>
            <span class = "glyphicon glyphicon-ok" style="cursor: pointer; float:right; margin-right:5px;" (click)="this.getDone(task.id)"></span>
          </div>
          <div class="panel-body">{{task.details}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class TodotabComponent implements OnInit {

  @Input() tabTitle : string;
  active : boolean;
  @Input() tabStatus : string;
  tasks: Array<ToDoItem>;

  constructor(@Inject('tdl') private tdl, tabs: TodotabsComponent) {
    tabs.addTab(this);
    tdl.tasks = this.tasks;
   }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tdl.getTasks().subscribe(
      data => {this.tasks = data;},
      err => {console.log('Error while reading tasks: '+err);}
    );
  }

  addTask(name, details, status) {
    this.tdl.addTask(name, details, status).subscribe(
      data => {
        this.getTasks();
        return true;
      },
      error => {
        console.log('Error while adding a task');
      }
    );
  }

  getDone(id) {
    this.tdl.getDone(id).subscribe(
      data => {
        this.getTasks();
        return true;
      },
      error => {
        console.log('Error occured while doing task');
      }
    );
  }

  removeTask(id) {
    this.tdl.removeTask(id).subscribe(
      data => {
        this.getTasks();
        return true;
      },
      error => {
        console.log('Error occured while removing a task');
      }
    );
  }

}
