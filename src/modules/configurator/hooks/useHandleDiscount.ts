import { useState } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { configuratorAtoms } from '../state';

export function useHandleDiscount() {
  const [discountInput, setdiscountInput] = useState(0);
  const [error, setError] = useState('');
  const setDiscountValue = useSetRecoilState(
    configuratorAtoms.discountValueState
  );
  const resetDiscountState = useResetRecoilState(
    configuratorAtoms.discountValueState
  );

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const discount = parseInt(e.currentTarget.value);
    setError('');
    switch (true) {
      case isNaN(discount):
        setdiscountInput(0);
        break;
      case discount < 0:
        setError("Discount value can't be negative number");
        break;
      case discount > 100:
        setError("Discount value can't be greater than 100");
        break;
      default:
        setdiscountInput(discount);
    }
  };

  const applyDiscount = () => {
    setDiscountValue(discountInput);
  };

  const resetDiscount = () => {
    resetDiscountState();
  };

  return {
    handleDiscountChange,
    applyDiscount,
    resetDiscount,
    error,
  };
}
