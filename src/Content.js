import React, { useContext} from 'react'
import {contextTheme} from './App'

const Content = (props) => {
        const state = useContext(contextTheme)
        if(state == "noTheme")
            return(
                <div>
                    <ContentHeader theme = {props.value} />
                    <ContentMessages theme = {props.value} />
                </div>
            )
}

const ContentHeader = (props) => {
    const state = useContext(contextTheme)
    if(state == "noTheme")
        return(
            <div id = "content_header">Тема пока не выбрана. Воспользуйтесь панелью слева</div>
        )
}

const ContentMessages = (props) => {
    const state = useContext(contextTheme)
    if(state != "noTheme")
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
        <div className = "message">
            <div className = "message-avatar">
                Ава
            </div>
            <div className = "message-text">
                {props.text}
            </div>
        </div>
    )
}

export default Content