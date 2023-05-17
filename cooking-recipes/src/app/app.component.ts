import { Component } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'cr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'cooking-recipes';

  state: boolean = false;
  recipe: Recipe = new Recipe();
  close(state: boolean) {
    state = true;
  }
}
