import { atom } from 'recoil';
import { ToppingsInfo } from '../types';

const selectedToppingsState = atom<ToppingsInfo[]>({
  key: 'configurator.selected.toppings',
  default: [],
});

const sizePriceState = atom<number>({
  key: 'configurator.selected.size',
  default: 7,
});

const discountValueState = atom<number>({
  key: 'configurator.discount.value',
  default: 0,
});

export const configuratorAtoms = {
  selectedToppingsState,
  sizePriceState,
  discountValueState,
};
