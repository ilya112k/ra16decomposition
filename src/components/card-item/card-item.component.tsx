import React from 'react';
import {CardItemComponentProps} from "./card-item.component.props.tsx";

import './card-item.component.css';

/**
 * Block of single card
*/
const CardItemComponent: React.FC<CardItemComponentProps> = ({ title, children }) => {
  return (
    <div className='card-item'>
      <h4>{title}</h4>
      {children}
    </div>
    );
};

export default CardItemComponent;