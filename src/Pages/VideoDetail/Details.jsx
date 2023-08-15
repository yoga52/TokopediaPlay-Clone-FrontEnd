import { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/Index'
import VideoViewer from '../../Components/VideoViewer/Index'
import CommentSection from '../../Components/CommentSection/Index'
import { useParams } from 'react-router-dom'
import './Style.css'


export default function VideoDetail() {
  const [products, setProducts] = useState([])
  const { id } = useParams()
  console.log('this is ' + id);

  const handleFetchProducts = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_SERVER + `/products/${id}`);
    const data = await response.json();
    console.log(import.meta.env.VITE_BACKEND_SERVER + `/products/${id}`);
    setProducts(data)
    console.log("The Data is :"+data);
  }

  useEffect(() => {
    handleFetchProducts()
  }, [])
  

  return (
    <>

      <div className="video-detail-container">
        <div className="products">
          {products.map((item,index)=>(
            <ProductCard key={index}
            imageURL={item.productImageURL}
            price={item.productPrice}
            productLink={item.productURL}
          />
          ))}
          
        </div>
        <div className="video-view">
          <VideoViewer
            videoID={id}
          />
        </div>
        <CommentSection
        videoID={id}
        />
      </div>

    </>

  )
}
