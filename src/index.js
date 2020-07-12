import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.sass';
import App from './components/app';



class Carefull extends React.Component {
    render() {
        return(
        <div>
            <App />
        </div>
        );
    }
}


ReactDOM.render(<Carefull className =' Carefull ' />, document.getElementById('root'));