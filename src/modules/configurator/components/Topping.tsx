import React from 'react';
import { ToppingsInfo } from 'modules/configurator';
import { useHandleToppings } from '../hooks';

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const { handleToppingsChange } = useHandleToppings();

  const handleToppingChange = () => {
    handleToppingsChange({ name, price });
  };

  return (
    <li>
      <label htmlFor={name}>
        {name} {price}
      </label>
      <input
        type='checkbox'
        name={name}
        id={name}
        onChange={handleToppingChange}
      />
    </li>
  );
};
