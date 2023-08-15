
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
