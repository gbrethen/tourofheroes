import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
            <div *ngIf="hero" class="row">
              <div class="col-sm-6 col-md-6">
                <div class="thumbnail">
                  <img src="../images/{{hero.alias}}.png">
                  <div class="caption">
                    <h3>{{hero.alias}}</h3>
                    <p><b>Real Name: </b>{{hero.name}}</p>
                    <p>{{hero.story}}</p>
                  </div>
                </div>
              </div>
            </div>
    `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}