import React from 'react';
import Content from './SectionTwoInnerTwo';
import Image from "./SectionTwoInnerOne";



class MainContainer extends React.Component {
    render() {
        return(
            <div className='sectionTwo'>
                <div className='col-12'>
                    <Image />
                    <Content className= 'Content'/>
                </div>
            </div>
        )
    }
}

export default MainContainer;