import React from 'react';
import {LinkListComponentProps} from "./link-list.component.props.tsx";

import './link-list.component.css';
import LinkItemComponent from "../link-item/link-item.component.tsx";

/**
 * List of links
 */
const LinkListComponent: React.FC<{ links: LinkListComponentProps[] }> = ({ links }) => {
  return (
    <div className='links-content'>
      {links.map((link) => (
          <LinkItemComponent link={link}/>
      ))}
    </div>
  );
};

export default LinkListComponent;