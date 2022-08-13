import React, { Component } from 'react'

class Content extends Component {
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.th == "noTheme")
            return(
                <div>
                    <ContentHeader />
                    <ContentMessages />
                </div>
            )
        else
            return(
                <div>
                    Тему выбрали!
                </div>
            )
        }
}

class ContentHeader extends Component {
    render(){
        return(
            <div id = "content_header">Тема пока не выбрана. Воспользуйтесь панелью слева</div>
        )
    }
}

class ContentMessages extends Component {
    render(){
        return(
            <React.Fragment>
                <Message text = "dddd"/>
                <Message text = "ddvgvcvg"/>
                <Message text = "degh5"/>
            </React.Fragment>
        )
    }
}

class Message extends Component {
    render(){
        return(
            <div className = "message">
                <div className = "message-avatar">
                    Ава
                </div>
                <div className = "message-text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Content