import React, { Component } from 'react'

class Themes extends Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'theme'>Темы</div>
                <Theme head = "Веб" />
                <Theme head = "Геймдев" />
                <Theme head = "Android" />
                <Theme head = "IOS" />
                <Theme head = "БД" />
            </React.Fragment>
        )
    }
    //Тут можно явно сделать эффективнее. А если бы список был из сотник элементов?
}

const Theme = (props) => {
    return(
        <div className = "theme">{props.head}</div>
    )
}

export default Themes