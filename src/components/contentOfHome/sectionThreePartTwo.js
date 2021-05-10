import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderTwo from "react-slick";
import Marbles from '../assets/images/Marble.svg';

class SecSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='secoundSlid'>
        <SliderTwo {...settings}>
          <div>
            <img src={Marbles} alt=''></img>
          </div>
          <div>
            <img src={Marbles} alt=''></img>
          </div>
          <div>
            <img src={Marbles} alt=''></img>
          </div>
        </SliderTwo>
      </div>
    );
  }
}
export default SecSlider;
