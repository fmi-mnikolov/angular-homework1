import { Component, HostBinding, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe-service/recipe.service';

@Component({
  selector: 'cr-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent implements OnInit {
  @HostBinding('class') class = 'router-outlet';

  recipes: Recipe[] = [];
  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((x) => (this.recipes = x));
  }
}
