import React, { Component } from 'react'

class Content extends Component{
    render(){

        return(
            <React.Fragment>
                <ContentHeader />
                <ContentMessages />
            </React.Fragment>
        )
    }
}

const ContentHeader = (props) => {
    return(
        <div id = "content_header">Тут заголовок выбранной темы</div>
    )
}

const ContentMessages = (props) => {
    return(
        <React.Fragment>
            <Message text = "dddd"/>
            <Message text = "ddvgvcvg"/>
            <Message text = "degh5"/>
        </React.Fragment>
    )
}

const Message = (props) => {
    return(
        <div id = "message">{props.text}</div>
    )
}

export default Content