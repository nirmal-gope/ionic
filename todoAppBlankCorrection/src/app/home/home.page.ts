import { Component } from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Mes tàches à faire';

  /* Tableau de tàches */

  task: Task = new Task();

  /*Tableau de tàche*/

  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      state: false
    },
    {
      id: 2,
      name: 'Promener le chien',
      state: true
    },
    {
      id: 3,
      name: 'Tondre la pelouse',
      state: false
    },
    {
      id: 4,
      name: 'Répéter au piano',
      state: true
    },
    {
      id: 5,
      name: 'Sortir les poublles',
      state: false
    },

  ];


  constructor() {}

  addTask() {
    /*Permet l'ajout d'une nouvelle tàche dans notre tableau "tasks"*/
    // console.log(this.task);
    // J'ajoute dans mon tableau de tàches ma nouvelle tàche

    this.tasks.push(this.task);

    // Je réinitialise la nouvelle tàche.

    this.task = {};
  }

  deleteTask(task: Task) { /*permet la suppression d'une tàche du tableau*/
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
