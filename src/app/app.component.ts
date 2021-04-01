import { Component } from '@angular/core';


export interface bookmark {
  Name: string;
  Url: string;
  Group : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avaloq-bookmark-app';

  
}


