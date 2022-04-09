import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable <Task[]>{
    const task = of(TASKS) 
    return task
  }

  constructor() {
   
   }
}
