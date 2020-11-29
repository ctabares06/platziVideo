/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import UseInitialState from '../hooks/UseInitialState';
import '../assets/styles/App.scss';

const Api = 'http://localhost:3000/initalState';

const App = () => {
  const [initialState, pageIsLoading] = UseInitialState(Api);

  if (!pageIsLoading) {
    return (
      <div className='app'>
        <Header />
        <Search />
        <h1>Cargando...</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div className='app'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          {
            initialState.mylist.map((video) => {
              return (<CarouselItem key={video.id} cover={video.cover} title={video.title} year={video.year} contentRating={video.contentRating} duration={video.duration} />);
            })
          }
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((video) => {
              return (<CarouselItem key={video.id} cover={video.cover} title={video.title} year={video.year} contentRating={video.contentRating} duration={video.duration} />);
            })
          }
        </Carousel>
      </Categories>
      <Categories title='Orinigales de platziVideo'>
        <Carousel>
          {
            initialState.originals.map((video) => {
              return (<CarouselItem key={video.id} cover={video.cover} title={video.title} year={video.year} contentRating={video.contentRating} duration={video.duration} />);
            })
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
