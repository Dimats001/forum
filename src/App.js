import React, { Component } from 'react'
import Head from './Head'
import Themes from './Themes'
import Content from './Content'



class App extends Component {
    constructor(){
        super()
        this.state = {
            theme: "noTheme" //В зависимости от выбранной темы будет меняться компонент Content
        }
    }

    onChange = () => {
        this.setState({theme: "chosen"})
        console.log("Theme is chosen!")
    }

    render(){

        return(
            <div>
                <Head />
                <div className = "flexbox-container">
                        <div id = "themes-container"><Themes th = {this.state.theme} onChange = {this.onChange} /></div>
                        <div id = "content-container"><Content th = {this.state.theme} onChange = {this.onChange}/></div>
                </div>
            </div>
        )
    }
}
export default App;
