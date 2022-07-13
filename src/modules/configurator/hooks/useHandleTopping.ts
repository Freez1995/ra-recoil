import { useRecoilState } from 'recoil';
import { configuratorAtoms } from '../state';
import { ToppingsInfo } from '../types';

export function useHandleToppings() {
  const [selectedToppingsList, setSelectedToppingsList] = useRecoilState(
    configuratorAtoms.selectedToppingsState
  );

  function handleToppingsChange({ name, price }: ToppingsInfo) {
    const isToppingFound = selectedToppingsList.some(
      (topping) => topping.name === name
    );
    isToppingFound
      ? setSelectedToppingsList(
          selectedToppingsList.filter((topping) => topping.name !== name)
        )
      : setSelectedToppingsList([...selectedToppingsList, { name, price }]);
  }

  return {
    handleToppingsChange,
  };
}
