import React, { Component, useContext, useState } from 'react'

class Themes extends Component{
    constructor(props){
        super(props)
    }

    render(){
            return(
                <React.Fragment>
                    <div className = 'theme'>Темы</div>
                    <Theme head = "Веб" onChange = {() => {this.props.onChange("Веб - выберите дискуссию")}}/>
                    <Theme head = "Геймдев"  onChange = {() => {this.props.onChange("Геймдев - выберите дискуссию")}}/>
                    <Theme head = "Android" onChange = {() => {this.props.onChange("Android - выберите дискуссию")}}/>
                    <Theme head = "IOS" onChange = {() => {this.props.onChange("IOS - выберите дискуссию")}}/>
                    <Theme head = "БД" onChange = {() => {this.props.onChange("БД - выберите дискуссию")}}/>
                </React.Fragment>
            )
        }
    //Тут можно явно сделать эффективнее. А если бы список был из сотни элементов?
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
