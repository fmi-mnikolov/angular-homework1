import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly apiUrl: string = 'http://localhost:3000/recipes';

  constructor(private client: HttpClient) {}

  public getRecipes(): Observable<Recipe[]> {
    return this.client.get<Recipe[]>(this.apiUrl);
  }

  public createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.client.post<Recipe>(this.apiUrl, recipe);
  }

  public updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.client.put<Recipe>(`${this.apiUrl}${recipe.id}`, recipe);
  }

  public deleteRecipe(recipe: Recipe): Observable<Recipe> {
    return this.client.delete<Recipe>(`${this.apiUrl}${recipe.id}`);
  }
}
