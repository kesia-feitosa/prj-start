import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelect = new EventEmitter<Recipe>();

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
}