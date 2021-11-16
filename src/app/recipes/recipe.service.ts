import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply test', 
        'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'),
        new Recipe('Another test recipe', 'This is simply test', 
        'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg')
      ];   

      getRecipes() {
          return this.recipes.slice();
      }
}