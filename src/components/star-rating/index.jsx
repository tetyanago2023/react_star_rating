
import { FaStar } from "react-icons/fa";
import './styles.css';
import {useState} from "react";
export default function StarRating ({ numberOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }

    const handleMouseMove = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }

    const handleMouseLeave = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }
    return (
        <div className="star-rating">
            {[...Array(numberOfStars)].map((star, index) => {
                const getCurrentIndex = index + 1;
                return <
                    FaStar
                    key={index}
                    className="star"
                    onClick={() => handleClick(getCurrentIndex)}
                    onMouseMove={() => handleMouseMove(getCurrentIndex)}
                    onMouseLeave={() => handleMouseLeave(getCurrentIndex)}
                />
            })}
        </div>
    )
}