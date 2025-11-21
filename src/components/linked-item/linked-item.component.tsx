import React from 'react';
import {LinkedItemComponentProps} from "./linked-item.component.props.tsx";

import './linked-item.component.css';

/**
 * Single element of linked list with props
 */
const LinkedItem: React.FC<LinkedItemComponentProps> = ({ icon, text, link }) => {
  return (
    <div className='linked-item'>
      <span>{icon}</span>
      <a href={link}>{text}</a>
    </div>
  );
};

export default LinkedItem;