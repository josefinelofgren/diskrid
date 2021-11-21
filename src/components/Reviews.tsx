import React, { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// get window dimensions
function getWindowDimensions(){
  const { innerWidth: width, innerHeight: height } = window;
  return {
      width,
      height
  };
}

function Reviews() {

  // window dimensions
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  let settings = {};

  if(windowDimensions.width < 768){
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  } else {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
  }

  // let reviews = [{rating: '4', user_name: 'Josefine', date: '29 september', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio.'}, {rating: '4', user_name: 'Josefine', date: '29 september', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio.'}, {rating: '4', user_name: 'Josefine', date: '29 september', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio.'}, {rating: '4', user_name: 'Josefine', date: '29 september', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio.'},{rating: '4', user_name: 'Josefine', date: '29 september', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio.'},{rating: '4', user_name: 'Josefine', date: '29 september', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio.'}]
    

  const [reviews, setReviews] = useState([]);
  const handleError = useErrorHandler();

  const callAPI = () => {
      const result = fetch('https://app.reviewapi.io/api/v1/reviews?apikey=4f66f620-4aac-11ec-ba71-cd49fe4dff49&url=https%3A%2F%2Fwww.trustpilot.com%2Freview%2Festrid.com&amount=8')
      .then((response) => response.json(),
            (error) => handleError(error))
            .then((data) => {
                setReviews(data.reviews);
            });
            return result;
  }

  useEffect(() => {
       (async function (){
           await callAPI();
           console.log(reviews)
       })();
   }, []);


  return (
    <div className='reviews'>
    <Slider {...settings}>
         {reviews.map((review:any, i:number) => (
           <div className='review-content' key={i}>
           <div className='grid'>
               <div className='stars'>
                   Betyg: <span className='fw-bold'>{review.rating}</span>
               </div>
               <div className='date right'>
                   {review.timestamp}
               </div>
           </div>
           <div className='review'>
               {review.text}
           </div>
           <div className='name'>
               {review.user_name}
           </div>
       </div>
         ))}
    </Slider>
    </div>
  );
}



export default Reviews;
