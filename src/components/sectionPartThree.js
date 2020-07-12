import React from 'react';
import SecThree from './sectionThreePartOne'
import SecSlider from './sectionThreePartTwo'

class TheardThree extends React.Component {
    render() {
        return(
          <div className='sectionThree'>
            <div className='secInnerThree'>
            <SecThree />
            <SecSlider />
            </div>
          </div>
        )
    }
}

export default TheardThree;