import React, { Component } from 'react'

class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme: this.props.th
        }
    }

    onChange = (th) => {
        this.setState({theme: th})
        console.log("Theme is chosen: " + th)
    }

    render(){
        if((this.props.th.length < 10) || (this.state.theme != "noTheme"))
            return(
                <div>
                    <ContentHeader th = {this.props.th} thNew = {this.state.theme}/>
                    <ContentMessages th = {this.props.th} thNew = {this.state.theme}/>
                </div>
            )
        else
            return(
                <div>
                    <ContentHeader th = {this.props.th} thNew = {this.state.theme}/>
                    <ContentDiscussions th = {this.props.th} onChange = {this.onChange}/>
                </div>
            )
    }
}

class ContentHeader extends Component {
    render(){
            if(this.props.th == "noTheme")
                return(
                    <div id = "content_header">Тема пока не выбрана</div>
                )
            else
                if(this.props.thNew != this.props.th){
                        if(this.props.thNew != "noTheme")
                            return(
                                <div id = "content_header">{this.props.thNew}</div>
                            )
                        else
                            return(
                                <div id = "content_header">Выберите дискуссию</div>
                            )
                }
                else
                    if(this)
                    return(
                        <div id = "content_header">{this.props.th}</div>
                    )
        }
}

class ContentDiscussions extends Component { //Это надо бы хранить в базе данных
    constructor(props){
        super(props)
    }

    onChange = (th) => {
        this.props.onChange(th)
    }
    render(){
        const th =  this.props.th.slice(0, this.props.th.length - 21)
        switch(th){
            case "Веб":
                return(
                    <>
                        <Discussion text = "Библиотека React. Почему не использовать чистый JavaScript?" onChange = {() => {this.props.onChange("Библиотека React. Почему не использовать чистый JavaScript?")}}/>
                        <Discussion text = "JavaScript. Всё, что вы хотели знать, но боялись спросить" onChange = {() => {this.props.onChange("JavaScript. Всё, что вы хотели знать, но боялись спросить")}}/>
                        <Discussion text = "Всё про HTML5 для самых маленьких" onChange = {() => {this.props.onChange("Всё про HTML5 для самых маленьких")}}/>
                        <Discussion text = "Обработка событий с помощью JavaScript" onChange = {() => {this.onChange("Обработка событий с помощью JavaScript")}}/>
                        <Discussion text = "Как взломать сайт Пентагона" onChange = {() => {this.onChange("Как взломать сайт Пентагона")}}/>
                    </>
                )
                break
            case "Геймдев":
                return(
                    <>
                        <Discussion text = "Пишем крестики-нолики" onChange = {() => {this.onChange("Пишем крестики-нолики")}} />
                        <Discussion text = "На каком движке лучше разрабатывать MMORPG?" onChange = {() => {this.onChange("На каком движке лучше разрабатывать MMORPG")}}/>
                    </>
                )
                break
            case "Android":
                return(
                    <>
                        <Discussion text = "Стоит ли становиться андроид-разработчиком?" onChange = {() => {this.onChange("Стоит ли становиться андроид-разработчиком?")}}/>
                    </>
                )
                break
            case "IOS":
                return(
                    <>
                        <Discussion text = "В разделе IOS пока не существует ни одной дискуссии" />
                    </>
                )
            case "БД":
                return(
                    <>
                        <Discussion text = "В разделе БД пока не существует ни одной дискуссии" />
                    </>
                )
                break
        }
    }
}

class Discussion extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "discussion" onClick = {this.props.onChange}>{this.props.text}</div>
        )
    }
}

class ContentMessages extends Component { //Это надо бы хранить в базе данных
    render(){
        switch(this.props.thNew){
            case "Библиотека React. Почему не использовать чистый JavaScript?":
                return(
                    <React.Fragment>
                        <Message text = "*Имя(Автор): тексктексттексттекст"/>
                        <Message text = "*Имя(Кто угодно): тексттекст"/>
                        <Message text = "*Имя(Кто угодно): тектектектекст"/>
                    </React.Fragment>
                )
                break
        }
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