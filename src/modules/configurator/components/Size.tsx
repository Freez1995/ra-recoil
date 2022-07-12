import React from 'react';
import { useRecoilState } from 'recoil';
import { sizePriceState } from '../state/atoms';

export const Size: React.FC = () => {
  const [selectedSizePrice, setselectedSizePrice] =
    useRecoilState(sizePriceState);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setselectedSizePrice(parseInt(e.target.value));
  };

  return (
    <section>
      <label htmlFor='s'>S</label>
      <input
        type='radio'
        value={7}
        id='s'
        name='size'
        checked={selectedSizePrice === 7}
        onChange={handleSizeChange}
      />
      <label htmlFor='m'>M</label>
      <input
        type='radio'
        value={10}
        id='m'
        name='size'
        onChange={handleSizeChange}
      />
      <label htmlFor='l'>L</label>
      <input
        type='radio'
        value={13}
        id='l'
        name='size'
        onChange={handleSizeChange}
      />
    </section>
  );
};
