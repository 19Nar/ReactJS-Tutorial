import React, { Component } from 'react'
import Header from './components/header'
import Container from './components/container'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/about'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                  
                    <Switch>
                        <Route path="/" exact component={Container} />
                        <Route path="/about" exact component={About} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

/*

<Router>
    <div>

      <Navi/>
   <Switch>
     <Route path="/" exact component={Container}/>
     <Route path="/about" exact component={Container}/>

   </Switch>
    </div>
    </Router>
    */