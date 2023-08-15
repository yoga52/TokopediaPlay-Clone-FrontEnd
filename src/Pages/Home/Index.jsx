import React, { useEffect, useState } from 'react'
import './Style.css'
import VideoCard from '../../Components/VideoCard/Index'
export default function Home() {
    const [videoData, setVideoData] = useState([])

    const handleFetchData = async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_SERVER + `/videos`);
        console.log(import.meta.env.VITE_BACKEND_SERVER + `/videos`);
        const data = await response.json();
        setVideoData(data)
    }

    useEffect(() => {
        handleFetchData()

    }, [])

    return (
        <div className="video-container">

            {videoData.map((data,index) => {
                return (
                        <VideoCard key={index}
                            videoID={data._id}
                            views={data.views}
                            imgURL={data.thumbnailURL}
                            videoURL={data.videoURL}
                            videoTitle={data.name}
                            store={data.store.name}
                        />

                )
            }


            )}

        </div>



    )
}
