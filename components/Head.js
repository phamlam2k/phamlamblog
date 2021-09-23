import React, { Component } from 'react';
import '../style/head.css'
import Navbar from './Navbar';

class Head extends Component {
    render(){
        return (
            <div className="header">
                <Navbar />
            </div>
        )
    }
}

export default Head;