import { React } from 'react'

export default function Rating({ rev }) {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                function setStars(rv) {
                    if (ratingValue != rev) {
                        return 'hoverStar';
                    } else {
                        return 'hoverStar';
                    }
                }
                return (
                    <label>
                        <input className="hidden"
                            type="radio"
                            name="rated"
                            value={ratingValue} />
                        <i className="fa fa-star fa-2x"
                            id={ratingValue <= rev ? "starHover" : "starDefault"}>
                        </i>
                    </label>
                )
            })}
        </div>
    )
}
