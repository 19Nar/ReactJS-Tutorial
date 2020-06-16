import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col } from 'reactstrap'
import Faker from 'faker'


class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [{
                avatar:'',
                name:'',
                email:''
            }]
        }
    }


    generateUser = () => {
        for (let i = 0; i < 20; i++) {
            const user = {
                name: Faker
                    .internet
                    .userName(),
                email: Faker
                    .internet
                    .email(),
                avatar: Faker
                    .internet
                    .avatar()
            }
            this.setState(prevState => ({
                users: [
                    ...prevState.users,
                    user
                ]
            }))
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.users.map((user, index) => {
            const { avatar,name,email } = user //destructuring
            if(user.avatar.length === 0) {
                console.log(user)
            }else{
                //console.log(user)
                return (
                    <tr key={index}>
                    <td><img className="img-responsive" alt="test" src={avatar}/></td>
                    <td>{name}</td>
                    <td>{email}</td>
                    
                </tr>
                
                )
            }
        })
    }



    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Profile Generator</h1>
                    <p>Profile Generator (fake data)</p>
                    <p>
                        <Button onClick={this.generateUser.bind(this)} variant="primary">Generate Fake Profile</Button>
                    </p>
                </Jumbotron>

                <Row>
                    <Col className="p-5">
                        
                                
                                <table id='profileList'>
                                    <tbody>
                                        <tr>{this.renderTableHeader()}</tr>
                                        {this.renderTableData()}
                                    
                                    </tbody>
                                </table>

                           

                    </Col>
                </Row>

            </div>
        )
    }
}


export default Slider;

