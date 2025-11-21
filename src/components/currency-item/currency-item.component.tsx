import React from 'react';
import {CurrencyItemComponentProps} from "./currency-item.component.props.tsx";

import './currenct-item.component.css';

/**
 * Single currency and rate of it
 */
const CurrencyItemComponent: React.FC<CurrencyItemComponentProps> = ({ currencyName, rate, yesterdayRate }) => {
  const rateDiffValue = rate - yesterdayRate;
  const rateDiffPercentage = ((rate - yesterdayRate) / yesterdayRate) * 100;

  return (
    <div className='currency-item'>
        <strong>{currencyName}:</strong> {rate} ({rateDiffValue.toFixed(2)}{' '}
        <span>{rateDiffValue > 0 ? '▲' : rateDiffValue < 0 ? '▼' : ''}{' '}</span>
        {Math.abs(rateDiffPercentage).toFixed(2)}%)
    </div>
  );
};

export default CurrencyItemComponent;