import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PannerImage from '../assets/images/Logo Typo.svg';
import BG from '../assets/images/BG.svg';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='sectionOne'>
        <Slider {...settings}>
          <div>
            <img src={BG} alt='Loading'></img>
              <h3 className='title'>
                <img src={PannerImage} alt='Loading'></img>
                <p className='subtitle'>PREMIUM  APPEARANCE</p>
              </h3>
          </div>
          <div>
            <img src={BG} alt='Loading'></img>
                <h3 className='title'>
                  <img src={PannerImage} alt='Loading'></img>
                  <p className='subtitle'>PREMIUM  APPEARANCE</p>
                </h3>
          </div>
          <div>
            <img src={BG} alt='Loading'></img>
                <h3 className='title'>
                  <img src={PannerImage} alt='Loading'></img>
                  <p className='subtitle'>PREMIUM  APPEARANCE</p>
                </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
