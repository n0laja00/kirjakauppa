import { useState, React } from 'react'

export default function Rating({ rev }) {
    const [rate, setRate] = useState(null)
    const [hover, setHover] = useState(null)
    console.log(rate)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = rev;
                return (
                    <label>
                        <input className="hidden"
                            type="radio"
                            name="rated"
                            value={ratingValue} />
                            {/* tässä menossa */}
                        <i className="fa fa-star fa-2x"
                            id={ratingValue > (hover || rate) ? "starHover" : "starDefault"}>
                        </i>
                    </label>
                )
            })}
        </div>
    )
}
