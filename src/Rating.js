import { React, useState } from 'react'

export default function Rating() {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input className="hidden"
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <i className="fa fa-star fa-2x"
                            id={ratingValue <= (hover || rating) ? "starHover" : "starDefault"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}>
                        </i>
                    </label>
                )
            })}
        </>
    )
}
