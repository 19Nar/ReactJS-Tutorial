import React, { Component } from 'react'
import Slider from './widgets/slider'
import Footer from './footer'
class Homepage extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Footer/>
            </div>
        )
    }
}

export default Homepage;