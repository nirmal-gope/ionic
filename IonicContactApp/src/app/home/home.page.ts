import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Déclaration de variable
  title = 'Mes Contacts';

  //Creation d'un petit tableau
  Contacts = [
    {name: 'Hugo'},
    {name: 'Jean'},
    {name: 'Alfred'},
    {name: 'Edouard'},
  ];

  constructor() {}

}
