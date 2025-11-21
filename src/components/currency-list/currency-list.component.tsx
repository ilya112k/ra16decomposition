import React from 'react';
import {currencyList} from "./currency-list.data.tsx";
import CurrencyItemComponent from '../currency-item/currency-item.component.tsx';

import './currency-list.component.css';

/**
 * Block with list of currency
 */
const CurrencyListComponent: React.FC = () => {
  return (
    <div className='currency-list'>
      {currencyList.map((currency, index) => (
        <CurrencyItemComponent key={index} {...currency} />
      ))}
    </div>
  );
};

export default CurrencyListComponent;