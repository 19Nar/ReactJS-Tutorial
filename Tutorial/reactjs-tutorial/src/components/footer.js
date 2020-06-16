import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className='bg-dark p-5 text-light' >
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Footer;