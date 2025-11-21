import './App.css'
import HeaderComponent from './components/header/header.component.tsx';
import NewsListComponent from './components/news-list/news-list.component.tsx';
import AdsListComponent from './components/ads-list/ads-list.component.tsx';
import CurrencyListComponent from './components/currency-list/currency-list.component.tsx';
import CardListComponent from './components/card-list/card-list.component.tsx';
import WidgetMainComponent from './components/widget-main/widget-main.component.tsx';

function App() {
  return (
    <>
      <HeaderComponent />
      <div className='top-container'>
        <NewsListComponent />
        <AdsListComponent />
      </div>
      <CurrencyListComponent />
      <WidgetMainComponent />
      <CardListComponent />
    </>
  )
}


export default App
