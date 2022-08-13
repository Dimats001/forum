import React, { Component, useContext, useState } from 'react'

class Themes extends Component{
    constructor(props){
        super(props)
    }

    render(){
            return(
                <React.Fragment>
                    <div className = 'theme'>Темы</div>
                    <Theme head = "Веб" onChange = {this.props.onChange}/>
                    <Theme head = "Геймдев"  onChange = {this.props.onChange}/>
                    <Theme head = "Android" onChange = {this.props.onChange}/>
                    <Theme head = "IOS" onChange = {this.props.onChange}/>
                    <Theme head = "БД" onChange = {this.props.onChange}/>
                </React.Fragment>
            )
        }
    //Тут можно явно сделать эффективнее. А если бы список был из сотник элементов?
}

class Theme extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "theme" onClick = {this.props.onChange}>{this.props.head}</div>
        )
    }
}

export default Themes
