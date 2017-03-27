import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="page-header">
      <h1>{{title}}</h1>
    </div>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li><a class="btn btn-default" routerLink="/heroes">Heroes</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
    
  `
})

export class AppComponent {
    title = 'Angular Tour of Heroes';
}