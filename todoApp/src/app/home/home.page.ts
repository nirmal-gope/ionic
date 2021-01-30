import { Component } from '@angular/core';
class item{
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Gestion de Tâches';
  tasks : item[] = [
    {
      id: 1,
      name: 'Jon Snow', isChecked: true
    },
    {
      id: 2,
      name: 'Daenerys Targaryen'
    },
    {
      id: 3,
      name: 'Arya Stark'
    },
    {
      id: 4,
      name: 'Tyrion Lannister'
    },
    {
      id: 5,
      name: 'Sansa Stark'
    },
  ];
  newTask: any = {};
  submitTask(): void {
    this.newTask.id = Date.now();
    this.tasks.push(this.newTask);
    this.newTask = {};
  };

  constructor() {}

}
