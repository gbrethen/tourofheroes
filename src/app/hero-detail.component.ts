import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
            <div *ngIf="hero">
              <h2>{{hero.name}} details!</h2>
              <div><label>id:&nbsp;</label>{{hero.id}}</div>
              <div class="alert alert-warning">
                <h4>{{hero.alias}}</h4>
              </div>
              <div>
                <label>name:&nbsp;</label>
                <input [(ngModel)]="hero.name" placeholder="name">
              </div>
            </div>
    `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}