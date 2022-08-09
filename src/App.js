import React, { Component } from 'react'
import Head from './Head'
import Themes from './Themes'
import Content from './Content'

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Head />
                    <Themes />
                    <Content />
            </React.Fragment>
        )
    }
}

export default App