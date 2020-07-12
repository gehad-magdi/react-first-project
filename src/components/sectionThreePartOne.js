import React from 'react';

class SecThree extends React.Component {
  constructor() {
    super()
    this.state={
        Name:'buttonName',
        color:'black',
        backgroundColor:'#fff',
        padding:' 20px 40px'
    }
}
 render() {
  return (
    <div>
        <h1>Products</h1>
        <p className='supheeding'>our premium apperance</p>
        <h3> Athens Gold Marble</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button type='button' onClick={null} className = 'buttonName'>READ MORE</button>
    </div>
    )   
 }   
}
export default SecThree;