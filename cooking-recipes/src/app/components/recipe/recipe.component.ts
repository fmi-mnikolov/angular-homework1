import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'cr-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass'],
})
export class RecipeComponent {
  @Input() recipe!: Recipe;
  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.closeEmitter.emit(true);
  }
}
