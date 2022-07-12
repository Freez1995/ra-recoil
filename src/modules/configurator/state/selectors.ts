import { selector } from 'recoil';
import {
  discountValueState,
  selectedToppingsState,
  sizePriceState,
} from './atoms';

export const totalPriceState = selector<number>({
  key: 'configurator.total.price',
  get: ({ get }) => {
    const selectedToppings = get(selectedToppingsState);
    const sizePrice = get(sizePriceState);
    const discountValue = get(discountValueState);

    let totalPrice = sizePrice;
    selectedToppings.forEach((topping) => {
      totalPrice += topping.price;
    });

    typeof discountValue === 'number' &&
      (totalPrice -= totalPrice * (discountValue / 100));

    return totalPrice;
  },
});
