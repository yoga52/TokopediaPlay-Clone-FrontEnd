import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
// eslint-disable-next-line react/prop-types
export default function VideoCard({ videoID, views, imgURL, videoTitle, store }) {

  const viewLink ='/video-detail/'+videoID

  return (
    <>
      <Link to={viewLink} style={{ textDecoration: 'none' }}>
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
