import { atom } from 'recoil';
import { ToppingsInfo } from '../types';

export const selectedToppingsState = atom<ToppingsInfo[]>({
  key: 'configurator.selected.toppings',
  default: [],
});

export const sizePriceState = atom<number>({
  key: 'configurator.selected.size',
  default: 7,
});

export const discountValueState = atom<number | undefined>({
  key: 'configurator.discount.value',
  default: undefined,
});
