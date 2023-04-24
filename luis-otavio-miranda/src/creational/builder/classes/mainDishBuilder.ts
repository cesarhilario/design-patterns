import { Beans, Meat, Rice, Beverage, Dessert } from './meals';
import { MealBox } from './mealBox';
import { MealBuilderProtocol } from '../interfaces/mealBuilderProtocol';

export class MainDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const beans = new Beans('Feijão', 10);
    const rice = new Rice('Arroz', 5);
    const meat = new Meat('Carne', 20);
    this._mealBox.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7);
    this._mealBox.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10);
    this._mealBox.add(dessert);

    return this;
  }

  getMealBox(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
