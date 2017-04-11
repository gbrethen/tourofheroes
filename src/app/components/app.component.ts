import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="page-header">
      <h2>{{title}}</h2>
    </div>
    
    <router-outlet></router-outlet>
    
  `
})

export class AppComponent {
    title = 'Tour of Heroes';
}
