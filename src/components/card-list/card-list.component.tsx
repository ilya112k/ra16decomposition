import React from 'react';
import LinkedItem from '../linked-item/linked-item.component.tsx';
import {cardsListData} from "./card-list.data.tsx";
import CardItemComponent from '../card-item/card-item.component.tsx';

import './card-list.component.css';

/**
 * Block with list of cards and linked items
 */
const CardListComponent: React.FC = () => {
  return (
    <div className='card-list'>
      {cardsListData.map((card, index) => (
        <CardItemComponent key={index} title={card.title}>
          {card.items.map((item, itemIndex) => (
            <LinkedItem key={itemIndex} {...item} />
          ))}
        </CardItemComponent>
      ))}
    </div>
  );
};

export default CardListComponent;