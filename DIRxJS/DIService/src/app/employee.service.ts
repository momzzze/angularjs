import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Arden","age":22},
      {"id":3,"name":"Ghoul","age":25},
      {"id":4,"name":"Brandon","age":23},
      {"id":5,"name":"Christina","age":27},
      {"id":6,"name":"Elena","age":33},
    ]
  }

}
