import { Beans, Meat, Rice, Beverage, Dessert } from './meals';
import { MealBox } from './mealBox';
import { MealBuilderProtocol } from '../interfaces/mealBuilderProtocol';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const beans = new Beans('Feijão', 10);
    const rice = new Rice('Arroz', 5);
    this._mealBox.add(rice, beans);

    return this;
  }

  getMealBox(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
