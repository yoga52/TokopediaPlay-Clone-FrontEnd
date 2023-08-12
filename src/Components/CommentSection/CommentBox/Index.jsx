import React from 'react'


// eslint-disable-next-line react/prop-types
export default function CommentBox({ userLogo, username, comment }) {
    return (
        <div className="comment-box">
            <div className="left">
                <div className="user-logo"><img src={userLogo} alt="" /></div>
            </div>
            <div className="right">
                <div className="username">{username}</div>
                <div className="comment">{comment}</div>
            </div>
        </div>
    )
}
