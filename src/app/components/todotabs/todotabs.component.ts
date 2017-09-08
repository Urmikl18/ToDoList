import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TodotabComponent } from '../todotab/todotab.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todotabs',
  template: `
    <div class = "jumbotron">
      <label for = "task">Task:</label>
      <input #nameInput type = "text" class = "form-control" placeholder="Try this ToDoList" id = "task" [(ngModel)]="task">
  
      <label for = "details" style="margin-top:10px">Details:</label>
      <textarea #detailsInput class = "form-control" placeholder="Today, tomorrow or never :)" id = "details" [(ngModel)]="details"></textarea>
  
      <label for="status" style="margin-top:10px">Status:</label>
      <select #statusInput class="form-control" id="status" [(ngModel)] = "status">
        <option selected>Normal</option>
        <option>Important</option>
        <option>Urgent</option>
        <option>Done</option>
      </select>

      <button type="button" class="btn btn-primary" style="margin-top:15px; display: inline-block;" (click) = "clearInputs(); this.addTask(task,details,status)">Add</button>
      <button type="button" class="btn btn-default" style="margin-top:15px; margin-left: 10px; display: inline-block;" (click) = "clearInputs()">Cancel</button>
      <button type="button" class="btn btn-default" style="margin-top:15px; margin-left: 10px; display: inline-block;" (click) = "logOut()">Log Out</button>
    </div>

    <ul class="nav nav-tabs" style="margin-top:10px">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class]="isSelected(tab)" style="cursor: pointer"><a>{{tab.tabTitle}}</a></li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: []
})

export class TodotabsComponent implements OnInit {

  tabs : TodotabComponent[] = [];
  
  @Input() task;
  @Input() details;
  @Input() status;

  @ViewChild('nameInput') nameInput;
  @ViewChild('detailsInput') detailsInput;
  @ViewChild('statusInput') statusInput;

  clearInputs()
  {
    this.nameInput.nativeElement.value = null;
    this.detailsInput.nativeElement.value = null;
    this.statusInput.nativeElement.value = 'Normal';
  }

  addTask(name, details, status) {
    this.tabs[0].addTask(name,details,status);
  }

  addTab(tab:TodotabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab : TodotabComponent) {
    this.tabs.forEach((tab) => {tab.active = false;});
    tab.active = true;
    tab.getTasks();
  }

  isSelected(tab : TodotabComponent) {
    return tab.active ? "active" : "";
  }

  logOut() {
    this.router.navigate(['/']);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
