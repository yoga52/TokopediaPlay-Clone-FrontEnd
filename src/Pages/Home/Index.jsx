import React from 'react'
import './Style.css'
import VideoCard from '../../Components/VideoCard/Index'
export default function Home() {

    const videoData = [
        {
            id: 0,
            views:122,
            name: "Gigih Store",
            videoTitle: "Limited Exclusive",
            imageURL: "https://images.ygoprodeck.com/images/cards/4280258.jpg"
        },
        {
            id: 1,
            views:1333,
            name: "Yugioh Store",
            videoTitle: "New Dune Special Discount Here",
            imageURL: "https://images.ygoprodeck.com/images/cards/4280258.jpg"
        },
        {
            id: 2,
            views:13221,
            name: "Kekw",
            videoTitle: "Free Items Here",
            imageURL: "https://images.ygoprodeck.com/images/cards/4280258.jpg"
        }
    ]
    return (
        <div className="video-container">

            {videoData.map(data => (
                <>
                    <VideoCard
                        videoID={data.id}
                        views={data.views}
                        imgURL={data.imageURL}
                        videoTitle={data.videoTitle}
                        store={data.name}
                    />
                </>

            ))}

        </div>



    )
}
