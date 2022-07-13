import React from 'react';
import { useHandleDiscount } from '../hooks';

export const Discount: React.FC = () => {
  const { handleDiscountChange, applyDiscount, resetDiscount, error } =
    useHandleDiscount();

  const handleDiscountInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleDiscountChange(e);
  };

  const handleApplyDiscount = () => {
    applyDiscount();
  };

  const handleResetDiscount = () => {
    resetDiscount();
  };

  return (
    <section>
      <label htmlFor='discount'>Discount</label>
      <input
        type='number'
        name='discount'
        id='discount'
        onChange={handleDiscountInputChange}
      />
      <button onClick={handleApplyDiscount} disabled={error !== ''}>
        Add discount
      </button>
      <button onClick={handleResetDiscount}>Remove discount</button>
      <p>{error}</p>
    </section>
  );
};
