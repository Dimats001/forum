import React, { createContext, useContext, Context, useState, useMemo } from 'react'
import Head from './Head'
import Themes from './Themes'
import Content from './Content'

export const contextTheme = createContext("noTheme")

const App = () => {
        const [Th, setTh] = useState('noTheme')
        const value = useContext(contextTheme)

        return(
            <div>
                <Head />
                <div className = "flexbox-container">
                    <contextTheme.Provider value = {value}>
                        <div id = "themes-container"><Themes /></div>
                        <div id = "content-container"><Content /></div>
                    </contextTheme.Provider>
                </div>
            </div>
        )
    }

export default App;
