import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
// eslint-disable-next-line react/prop-types
export default function VideoCard({ videoID, views, imgURL, videoTitle, store }) {
  const viewLink ='/video-detail/'+videoID
  const handleView = async ()=>{
    try{
      const response = await fetch(import.meta.env.VITE_BACKEND_SERVER+`/videos/view/${videoID}`,{method:'PATCH'});
      const data = await response.json();
      console.log(import.meta.env.VITE_BACKEND_SERVER+`/videos${videoID}`);
      console.log(data);
    }catch(error){
      console.log("This Is error "+error);
    }
  }

  return (
    <>
      <Link onClick={handleView} to={viewLink} style={{ textDecoration: 'none' }}>
        <div className="video-card" >

          <img src={imgURL} alt="" />
          <div className="top">
            <div className="box--live">
              <p className="live">Live</p>
            </div>
            <div className="box--views">
              <p className="views">{views} Views</p>
            </div>
          </div>
          <div className="bottom">
            <div className="video-title">{videoTitle}</div>
            <div className="store">{store}</div>
          </div>

        </div>
      </Link>
    </>

  )
}
