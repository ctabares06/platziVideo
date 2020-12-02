import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavoriteVideo, deleteFavoriteVideo } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';
import removeIcon from '../assets/img/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, list = false } = props;
  const HandleSetFavorite = () => {
    props.setFavoriteVideo({
      id, cover, title, year, contentRating, duration,
    });
  };

  const HandleDeleteFavorite = (id) => {
    props.deleteFavoriteVideo(id);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='' />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          </Link>
          {
            list ?
              <img className='carousel-item__details--img' onClick={() => HandleDeleteFavorite(id)} src={removeIcon} alt='remove Icon' /> :
              <img className='carousel-item__details--img' onClick={HandleSetFavorite} src={plusIcon} alt='Plus Icon' />
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} minutos`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavoriteVideo,
  deleteFavoriteVideo,
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
