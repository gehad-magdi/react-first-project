import React from 'react';


class Clones extends React.Component {
    render() {
     return (
        <div className='Clones'>
            <img src={this.props.image} alt={'loading'}></img>
            <h1>{this.props.title}</h1>
            <p>{this.props.typo}</p>
            <button type='button' className='buttonName' onClick={null}>SEE MORE</button>
        </div>
     )   
    }   
}
export default Clones;