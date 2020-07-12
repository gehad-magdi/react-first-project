import React from 'react'
import Home from './Home';
// import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
    render(){
        const footer = 'footer'
        return(
        <div>
            <Header />
            {home}
             {/* <Footer className = {footer}/> */}
        </div>
        )
    }
}
let home = <Home />
export default App
