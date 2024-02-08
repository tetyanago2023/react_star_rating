import { FaStar } from "react-icons/fa";
import './styles.css';
import { useState } from "react";

export default function StarRating({ numberOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleInteraction = (currentIndex, isMouseMove) => {

        if (isMouseMove) {
            setHover(currentIndex);
        } else {
            setRating(currentIndex);
        }
    }

    const handleMouseLeave = () => {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {[...Array(numberOfStars)].map((_, index) => {
                const starIndex = index + 1;

                return (
                    <FaStar
                        key={starIndex}
                        className={starIndex <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleInteraction(starIndex, false)}
                        onMouseMove={() => handleInteraction(starIndex, true)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                    />
                );
            })}
        </div>
    );
}
