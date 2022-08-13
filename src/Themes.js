import React, { Component, useContext, useState } from 'react'
import { contextTheme} from './App'

const Themes = (props) => {
        const state = useContext(contextTheme)
        if(state == "noTheme")
            return(
                <React.Fragment>
                    <div className = 'theme'>Темы</div>
                    <Theme head = "Веб" />
                    <Theme head = "Геймдев"  />
                    <Theme head = "Android" />
                    <Theme head = "IOS" />
                    <Theme head = "БД" />
                </React.Fragment>
            )
    //Тут можно явно сделать эффективнее. А если бы список был из сотник элементов?
}

const Theme = (props) => {
    return(
        <div className = "theme">{props.head}</div>
    )
}

const context = React.createContext()
export default Themes
