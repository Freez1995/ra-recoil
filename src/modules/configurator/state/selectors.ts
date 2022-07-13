import { selector } from 'recoil';
import { configuratorAtoms } from './atoms';

export const totalPriceState = selector<number>({
  key: 'configurator.total.price',
  get: ({ get }) => {
    const selectedToppings = get(configuratorAtoms.selectedToppingsState);
    const sizePrice = get(configuratorAtoms.sizePriceState);
    const discountValue = get(configuratorAtoms.discountValueState);

    let totalPrice = sizePrice;
    selectedToppings.forEach((topping) => {
      totalPrice += topping.price;
    });

    totalPrice -= totalPrice * (discountValue / 100);

    return totalPrice;
  },
});
