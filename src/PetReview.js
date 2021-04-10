import {useEffect, useState} from 'react';

const PetReview = (props) => {
    const [userReview, setUserReview] = useState([]);

    useEffect( () => {
        const newState = [];
        for (let key in props.reviews) {
            newState.push({
                key: key,
                review: props.reviews[key]
            });
        };
        setUserReview(newState);
    }, []);

    
    return (
        <>
        {
            userReview.map( (petReviews) => {
                console.log(petReviews.key)
                return (
                    <article key={petReviews.key}>
                        <div className="reviewerInfo">
                            <p className="name">Anonymous Pet Lover</p>
                            <p>April 10, 2021</p>
                        </div>
                        <div className="reviewText">
                            <p>{petReviews.review}</p>
                        </div>
                    </article>
                )
            })
        }
        </>
    )
}

export default PetReview;