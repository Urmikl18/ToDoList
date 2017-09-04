import { Pipe, PipeTransform } from '@angular/core';
import { ToDoItem } from '../services/todolist.service';

@Pipe({
  name: 'itemFilter'
})

export class ItemFilterPipe implements PipeTransform {

  transform(value: Array<ToDoItem>, args?: any): any {
    let st = args;
    var res;
    if (st==="all")
      res = value.filter((task) => {
        return task.status !== 'done';
      });
    else res = value.filter((task) => {
      return task.status === st;
    });
    return res;
    }

}
