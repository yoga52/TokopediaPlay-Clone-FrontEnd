import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YoutubeParser from '../../Utilities/YoutubeParser';

// eslint-disable-next-line react/prop-types
export default function VideoViewer({ videoID }) {
  const [videoLink, setVideoLink] = useState('')

  const handleFetchData = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_SERVER + `/videos/${videoID}`);
    const data = await response.json();
    console.log(import.meta.env.VITE_BACKEND_SERVER + `/videos/${videoID}`);
    console.log(data[0].videoURL);
    const youtubeVidID = YoutubeParser(data[0].videoURL)
    setVideoLink(`https://www.youtube.com/embed/${youtubeVidID}?autoplay=1&mute=1&enablejsapi=1"
    frameborder="0"`)
  }
  
  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <iframe id="ytplayer" type="text/html" width="640" height="360"
      src={videoLink}
    >
    </iframe>

  )
}
