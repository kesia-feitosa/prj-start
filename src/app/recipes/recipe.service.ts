import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeChanges = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'This is simply test', 
            'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'
            , 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another test recipe', 
            'This is simply test', 
            'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg',
            [
                new Ingredient('Buns', 2 ),
                new Ingredient('Meat', 1)
            ])
      ];   

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index:number) {
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipeChanges.next(this.recipes.slice())
;      }

      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipeChanges.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index);
        this.recipeChanges.next(this.recipes.slice());
      }
}