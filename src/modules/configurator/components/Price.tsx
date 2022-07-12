import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalPriceState } from '../state';

export const Price: React.FC = () => {
  const totalPrice = useRecoilValue(totalPriceState);
  return (
    <section>
      <p>Total price: ${totalPrice}</p>
    </section>
  );
};
