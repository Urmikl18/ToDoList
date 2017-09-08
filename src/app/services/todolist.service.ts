import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {apiUrl, contentHeaders } from '../common/app.communication';

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


  addTask(user, name, details, status) {
    let task = {
      "name": name, 
      "details": details,
      "status": status.toLowerCase()};
    let body = JSON.stringify(task);
    return this.http.post(apiUrl+'addTask/'+user, body, {headers: contentHeaders}).map(res => res.json());
  }

  removeTask(user, id) {
    return this.http.delete(apiUrl+'deleteTask/'+user+'/'+id).map(res => res.json());
  }

  getDone(user, id) {
    let body = null;
    return this.http.put(apiUrl+'doTask/'+user+'/'+id, body, {headers: contentHeaders}).map(res => res.json());
  }

  getTasks(user) {
    return this.http.get(apiUrl+'listTasks/'+user).map(res => res.json());
  }

  getStatus(task) {
    if (task.status === TodolistService.IMPORTANT) return 'panel panel-primary';
    else if (task.status === TodolistService.URGENT) return 'panel panel-danger';
    else if (task.status === TodolistService.DONE) return 'panel panel-success';
    else return 'panel panel-default';
  }

  constructor(private http: Http) {}
    
}
