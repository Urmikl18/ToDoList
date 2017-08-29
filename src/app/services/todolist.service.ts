import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

export class ToDoItem {
  id : number;
  name : string;
  details : string;
  status : string;

  constructor(id, name, details, status) {
    this.id = id;
    this.name = name;
    this.details = details;
    this.status = status;
  }
}

@Injectable()
export class TodolistService {

  private static NORMAL = 'normal';
  private static IMPORTANT = 'important';
  private static URGENT = 'urgent';
  private static DONE = 'done';

  addTask(name, details, status) {
    let task = {
      "name": name, 
      "details": details,
      "status": status.toLowerCase()};
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(task);
    return this.http.post('http://localhost:3000/addTask', body, {headers: headers}).map(res => res.json());
  }

  removeTask(id) {
    return this.http.delete('http://localhost:3000/deleteTask/'+id).map(res => res.json());
  }

  getDone(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = null;
    return this.http.put('http://localhost:3000/doTask/'+id, body, {headers: headers}).map(res => res.json());
  }

  getTasks() {
    return this.http.get('http://localhost:3000/listTasks').map(res => res.json());
  }

  getStatus(task) {
    if (task.status === TodolistService.IMPORTANT) return 'panel panel-primary';
    else if (task.status === TodolistService.URGENT) return 'panel panel-danger';
    else if (task.status === TodolistService.DONE) return 'panel panel-success';
    else return 'panel panel-default';
  }

  constructor(private http: Http) {}
    
}
