import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppinglist.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {
  @ViewChild('ingredientsForm') ingredientsForm: NgForm;
  ingredientAmount = 0;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.ingredientsForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFormClear() {
    this.ingredientsForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onFormClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }

  onFormSubmit(form: NgForm) {
    const value = form.value;
    if (!this.editMode) {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    }
    this.editMode = false;
    form.reset();
  }
}
