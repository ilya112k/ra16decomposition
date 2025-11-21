import React from 'react';
import LinkListComponent from '../link-list/link-list.component.tsx';
import {widgetMainLinkList} from "./widget-main.data.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import './widget-main.component.css';

/**
 * Main widget with search bar and links
 */
const WidgetMainComponent: React.FC = () => {
	return (
		<>
			<div className='main-content'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yandex_official_logo.svg/220px-Yandex_official_logo.svg.png'></img>
				<div className='base-container'>
					<div className='links-content'>
						<LinkListComponent links={widgetMainLinkList} />
					</div>
					<div className='search-container'>
						<input></input>
						<button className="btn btn-warning">Найти</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default WidgetMainComponent;