import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  id: number;
  recipeForm: FormGroup;
  imageUrl = '';
  controls;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = !!this.id || this.id === 0;
      this.initForm();
      const array = this.recipeForm.get('ingredients') as FormArray;
      this.controls = array.controls;

    });
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    const ingredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup(
            {
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, Validators.required)
            }
          ));
        }
      }
      this.imageUrl = imagePath;

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onAdd() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required)
    }));
  }

  onRemove(index) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSubmit() {

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['/recipes']);

  }

  onCancel() {
    this.recipeForm.reset();
    this.router.navigate(['/recipes']);
  }

}
