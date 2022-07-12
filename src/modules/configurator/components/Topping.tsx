import React from 'react';
import { ToppingsInfo } from 'modules/configurator';
import { useRecoilState } from 'recoil';
import { selectedToppingsState } from '../state';

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const [selectedToppingsList, setSelectedToppingsList] = useRecoilState(
    selectedToppingsState
  );
  const handleToppingChange = () => {
    const isToppingFound = selectedToppingsList.some(
      (topping) => topping.name === name
    );
    isToppingFound
      ? setSelectedToppingsList(
          selectedToppingsList.filter((topping) => topping.name !== name)
        )
      : setSelectedToppingsList([...selectedToppingsList, { name, price }]);
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
