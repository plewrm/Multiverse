import React, { useRef } from 'react'
import './Video.css'
import DemoVideo from '../../assets/clgvid.mp4'
const Video = ({ playState, setPlayState }) => {
  const player = useRef(null)
  const handlePlay = (e) => {
    if (e.target === player.current) {
      setPlayState(false)
    }
  }
  return (
    <div className={`video-player ${!playState ? 'hide' : ''}`} ref={player} onClick={handlePlay}>
      <video src={DemoVideo} autoPlay muted controls></video>
    </div>
  )
}

export default Video
