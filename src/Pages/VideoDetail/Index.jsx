import React from 'react'
import ProductCard from '../../Components/ProductCard/Index'
import VideoViewer from '../../Components/VideoViewer/Index'
import CommentSection from '../../Components/CommentSection/Index'
import { useParams } from 'react-router-dom'
import './Style.css'


export default function VideoDetail() {
  const { id } = useParams()
  console.log('this is ' + id);
  return (
    <>

      <div className="video-detail-container">
        <div className="products">
          <ProductCard />
        </div>
        <div className="video-view">
          <VideoViewer />
        </div>
        <CommentSection/>
      </div>

    </>

  )
}
