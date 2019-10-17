import { Component } from '@angular/core';
import { Client } from 'src/model/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inbox-project';

  clientes: Array<Client> = [
    {
      id: 1,
      fullName: 'Luis Fernando',
      email: 'iscluis@hotmail.com',
      age: 22
    },
    {
      id: 2,
      fullName: 'Luis Fernando',
      email: 'iscluis@hotmail.com',
      age: 22
    },
    {
      id: 3,
      fullName: 'Luis Fernando',
      email: 'iscluis@hotmail.com',
      age: 22
    },
    {
      id: 4,
      fullName: 'Luis Fernando',
      email: 'iscluis@hotmail.com',
      age: 22
    }
  ]
}
