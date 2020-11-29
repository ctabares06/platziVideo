import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          {
            mylist.map((video) => {
              return (
                <CarouselItem
                  key={video.id}
                  id={video.id}
                  cover={video.cover}
                  title={video.title}
                  year={video.year}
                  contentRating={video.contentRating}
                  duration={video.duration}
                  list='mylist'
                />
              );
            })
          }
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          {
            trends.map((video) => {
              return (
                <CarouselItem
                  key={video.id}
                  id={video.id}
                  cover={video.cover}
                  title={video.title}
                  year={video.year}
                  contentRating={video.contentRating}
                  duration={video.duration}
                />
              );
            })
          }
        </Carousel>
      </Categories>
      <Categories title='Orinigales de platziVideo'>
        <Carousel>
          {
            originals.map((video) => {
              return (
                <CarouselItem
                  key={video.id}
                  id={video.id}
                  cover={video.cover}
                  title={video.title}
                  year={video.year}
                  contentRating={video.contentRating}
                  duration={video.duration}
                />
              );
            })
          }
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
