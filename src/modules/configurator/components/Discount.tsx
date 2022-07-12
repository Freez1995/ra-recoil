import React, { useState } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { discountValueState } from '../state';

export const Discount: React.FC = () => {
  const [discountInput, setdiscountInput] = useState<number | string>('');
  const setDiscountValue = useSetRecoilState(discountValueState);
  const resetDiscount = useResetRecoilState(discountValueState);

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const discount = parseInt(e.target.value);
    switch (true) {
      case isNaN(discount):
        setdiscountInput('');
        break;
      case discount > 100:
        setdiscountInput(100);
        break;
      case discount > 0:
        setdiscountInput(discount);
        break;
      default:
        setdiscountInput(0);
    }
  };

  const handleApplyDiscount = () => {
    typeof discountInput === 'string'
      ? setDiscountValue(0)
      : setDiscountValue(discountInput);
  };

  const handleResetDiscount = () => {
    resetDiscount();
    setdiscountInput('');
  };

  return (
    <section>
      <label htmlFor='discount'>Discount</label>
      <input
        type='number'
        name='discount'
        id='discount'
        value={discountInput}
        onChange={handleDiscountChange}
      />
      <button onClick={handleApplyDiscount}>Add discount</button>
      <button onClick={handleResetDiscount}>Remove discount</button>
    </section>
  );
};
