import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() customerSlug: string = ""; // slug instance variable of InfoComponent
  customers = {
    'henry-gerard':  ["Henry", "Gerard", 21, 'Livershool', 'Male', '3123', 'India', 'TN'],
    'michael-platini': ["Michael", "Platini", 40, 'Czecha', 'Male', '3198', 'USA', 'SF'],
    'louis-figo':
    ["Louis", "Figo", 37, 'Reala Madrida', 'Male', '3176', 'France', 'PA'],
    'cristiana-ronaldinho':
    ["Cristiana", "Ronaldinho", 15, 'Portugalia', 'Female', '3178', 'Portugal', 'LB'],
    'leonardo-messiah':
    ["Leonardo", "Messiah", 25, 'Barceloja', 'Female', '3165', 'Argentina', 'BA']
  }


  constructor() { }

  get selectedSlug() {
      return  this.customers[this.customerSlug];
  }

}
