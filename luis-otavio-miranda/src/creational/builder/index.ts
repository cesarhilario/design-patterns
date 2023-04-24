import { VeganDishBuilder } from './classes/veganDishBuilder';
import { MainDishBuilder } from './classes/mainDishBuilder';

const mainDishBuilder = new MainDishBuilder();
const mainDish = mainDishBuilder.makeMeal();

console.log(mainDish.getMealBox());
console.log(mainDish.getPrice());

mainDish.reset();

const mainDish2 = mainDish.makeBeverage().getMealBox();
console.log(mainDish2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMealBox();
console.log(veganMeal);
