import { selector } from 'recoil';
import {
  discountValueState,
  selectedToppingsState,
  sizePriceState,
} from './atoms';

export const totalPriceState = selector<number | string>({
  key: 'configurator.total.price',
  get: ({ get }) => {
    const selectedToppings = get(selectedToppingsState);
    const sizePrice = get(sizePriceState);
    const discountValue = get(discountValueState);

    let totalPrice = sizePrice;
    selectedToppings.forEach((topping) => {
      totalPrice += topping.price;
    });
    let finalPrice: string | number = 0;
    typeof discountValue === 'number'
      ? (finalPrice = totalPrice - totalPrice * (discountValue / 100))
      : (finalPrice = '');

    return finalPrice;
  },
});
