import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import { Container, Row, Col } from 'reactstrap'

class About extends Component {
    render() {
        return (
            <div>
                
                <Container>
                    <Row>
                        <Col className="p-5">
                        About
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default About 