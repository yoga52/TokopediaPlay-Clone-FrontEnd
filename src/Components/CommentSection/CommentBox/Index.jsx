import React, { useEffect, useState } from 'react'
import userLogo1 from '../../../assets/UserLogos/1.png'
import userLogo2 from '../../../assets/UserLogos/2.png'
import userLogo3 from '../../../assets/UserLogos/3.png'
// eslint-disable-next-line react/prop-types
export default function CommentBox({ username, comment,userLogo }) {



    

    return (
        <div className="comment-box">
            <div className="left">
                <div className="user-logo"><img src={userLogo} alt='No Image' /></div>
            </div>
            <div className="right">
                <div className="username">{username}</div>
                <div className="comment">{comment}</div>
            </div>
        </div>
    )
}
