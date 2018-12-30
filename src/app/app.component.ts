import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vanhackng';
  selectedCcustomer = '';

  selectedSlug($event){
this.selectedCcustomer = $event;
  }
}
