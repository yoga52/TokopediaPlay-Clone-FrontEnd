import { useEffect, useState } from 'react'
import CommentBox from './CommentBox/Index'
import './Style.css'
import userLogo1 from '../../assets/UserLogos/1.png'
import userLogo2 from '../../assets/UserLogos/2.png'
import userLogo3 from '../../assets/UserLogos/3.png'

// eslint-disable-next-line react/prop-types
export default function CommentSection({ videoID }) {

    const [formData, setFormData] = useState({
        username: "",
        comment: ""
    })
    const [comments, setComments] = useState([])
    const [userLogo, setUserLogo] = useState([userLogo1,userLogo2,userLogo3])
    const R = (min, max)=> { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_SERVER + `/comments/${videoID}`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }
            });
            const data = await response.json();
            console.log(import.meta.env.VITE_BACKEND_SERVER + `/comments/${videoID}`);
            console.log(data);
            handleFetchComments()
        } catch (error) {
            console.log(error);
            console.log(JSON.stringify(formData));
        }

    }

    const handleMyText = (e) => {
        console.log('Typed');
        const { name, value } = e.target;
        console.log('Typed ' + name + '  ' + value);
        setFormData({ ...formData, [name]: value });
    };


    const handleFetchComments = async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_SERVER + `/comments/${videoID}`);
        const data = await response.json();
        console.log(import.meta.env.VITE_BACKEND_SERVER + `/comments/${videoID}`);
        setComments(data)
        console.log(data);
    }

    useEffect(() => {
        console.log('Run Once');
        handleFetchComments()
    }, [])

    return (
        <div className="comment-section">
            <div className="comments-container">
                {comments.map((data, index) => (
                    <CommentBox key={index}
                        username={data.username}
                        comment={data.comment}
                        userLogo={userLogo[R(0,2)]}
                    />

                ))}

            </div>
            <div className="comment-input">
                <form onSubmit={handleSubmit} className="input-box" >
                    <div className="text-input">
                        <p>Username</p>
                        <input
                            id='username'
                            value={formData.username}
                            onChange={handleMyText}
                            name='username'
                            required
                            type="username-input" />
                        <p>Comment Here</p>
                        <textarea
                            onChange={handleMyText}
                            value={formData.comment}
                            name='comment'
                            id='comment' required
                            className="textbox"
                            type="text"></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
