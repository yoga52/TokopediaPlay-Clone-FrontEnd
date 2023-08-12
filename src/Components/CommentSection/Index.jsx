import React from 'react'
import CommentBox from './CommentBox/Index'
import './Style.css'
export default function CommentSection() {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const commentData = [
        {
            id:0,
            username:'Papaya',
            userLogoURL:'',
            comment:'Barangnya Bagus'
        }
    ]
    return (
        <div className="comment-section">
            <div className="comments-container">
                {commentData.map(data=>(
                    <>
                    <CommentBox
                    username={data.username}
                    comment={data.comment}
                    userLogo={data.userLogoURL}
                    />                    
                    </>
                ))}
                
            </div>
            <div className="comment-input">
                <form className="input-box" action="">
                    <textarea className="textbox" type="text"></textarea>
                    <input onSubmit={handleSubmit} className="submit-button" type="submit" />
                </form>
            </div>
        </div>
    )
}
