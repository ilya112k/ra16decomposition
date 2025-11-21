import React from 'react';
import {LinkItemComponentProps} from "./link-item.component.props.tsx";

/**
 * Single link item
 */
const LinkItemComponent: React.FC<LinkItemComponentProps> = ({ link }) => {
    return (
        <a href={link.reference}>{link.name}</a>
    );
};

export default LinkItemComponent;