import React from 'react';
import {newsListData} from "./news-list.data.tsx";

import './news-list.component.css';
import NewsItemComponent from "../news-item/news-item.component.tsx";

/**
 * Block of news
 */
const NewsListComponent: React.FC = () => {
  return (
    <div className='news-container'>
      <h2>Новости</h2>
      <div className='news-list'>
        {newsListData.map((news, index) => (
            <NewsItemComponent news={news} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default NewsListComponent;