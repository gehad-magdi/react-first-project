import React from 'react';
import Email from './images/Email.svg';
import Icone from './images/icon.svg';
// import Monkey from './images/wmv3mtusjwb3r13d5h2f.png'

class MainFooter extends React.Component {
    render() {
        return (
        <div>
            <div>
                <h1>GET A QUOTATION</h1>
                <p className='blue-color'>OR</p>
                <p>Get in Touch</p>
            </div>
            <div className='info'>
                <div>
                    <img src={Email} alt={'loding'}></img>
                    <p className= 'textInfo'>Info@amwajnational.com</p>
                </div>
                <div>
                    <img src={Icone} alt={'loding'}></img>
                    <p className= 'textInfo'>+20 111 0000 111</p>
                </div>
            </div>
            {/* <img src={Monkey} alt={'loding'} className='monkeyMove'></img> */}
        </div>
        )
    }
}
export default MainFooter;