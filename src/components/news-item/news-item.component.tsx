import React from "react";
import LinkedItem from "../linked-item/linked-item.component.tsx";
import {NewsItemComponentProps} from "./news-item.component.props.tsx";


/**
 * Single news
 */
const NewsItemComponent: React.FC<NewsItemComponentProps> = ({ news }) => {
    return (
        <div className='news-item'>
            <LinkedItem {...news} />
        </div>
    );
};

export default NewsItemComponent;