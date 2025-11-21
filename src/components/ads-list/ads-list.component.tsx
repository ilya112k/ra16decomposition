import React from 'react';
import {AdsListData} from "./ads-list.data.tsx";

import './ads-list.component.css';

/**
 * Block with ADS's list
 */
const AdsListComponent: React.FC = () => {
  return (
    <div className='ads-list'>
      {AdsListData.map((adds, index) => (
        <div key={index} className='ads-item'>
          {adds.img && <img src={adds.img.src} alt={adds.img.alt} />}
          <a className='ads-item_link' href={adds.link}>
            {adds.text}
          </a>
          {adds.span && <span className='ads-item_subtext'>{adds.span}</span>}
        </div>
      ))}
    </div>
  );
};

export default AdsListComponent;


