import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cr-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent {
  @HostBinding('class') class = 'router-outlet';
}
