import React from 'react';
import Image from './sectionTwo';
import SimpleSlider from './Panner';
import CloneSection from './sectionClone'
import TheardThree from './sectionPartThree'




class Home extends React.Component {
    constructor(){
        super();
        this.state = { 
           name: 'bigComponant'
        }
    }
    render(){
        return(
            <div className={this.state.name}>
                <SimpleSlider />
                <Image />
                <TheardThree />
                <CloneSection />
            </div>
        )
    }
}

export default Home
