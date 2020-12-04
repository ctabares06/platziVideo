import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { setPlayingVideo } from '../actions/index';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = { ...props }.match.params;
  const [loading, setLoading] = useState(true);
  const playing = props.playing;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    props.setPlayingVideo(id);
    setLoading(false);
  }, []);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className='player'>
      {
        loading ?
          (
            <div className='isLoading' />
          ) :
          (
            <>
              <video controls autoPlay muted='true'>
                <source src={playing.source} type='video/mp4' />
              </video>
              <div className='Player-back'>
                <button type='button' onClick={goBack}>Regresar</button>
              </div>
            </>
          )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  setPlayingVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
