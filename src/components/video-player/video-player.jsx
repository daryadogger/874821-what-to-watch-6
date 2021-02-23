import React, {useEffect, useRef} from 'react';
import videoPlayerProps from '../video-player/video-player.prop';

const VideoPlayer = (props) => {
  const {isActive, src, posterImage, width, height, alt} = props;

  const videoRef = useRef();

  useEffect(() => {
    if (isActive) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  }, [isActive, src]);

  return <>

    <video muted src={src} poster={posterImage} ref={videoRef} width={width} height={height} alt={alt}></video>

  </>;
};

VideoPlayer.propTypes = videoPlayerProps;

export default VideoPlayer;
