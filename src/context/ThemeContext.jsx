import React, { useState } from 'react'

const ThemeContext = React.createContext();

function DarkModeProvider(props) {
    const [darkMode, useDarkMode] = useState(false);
    const toggleDarkMode = () => {
        useDarkMode(!darkMode)
    }

    return (
        <div>
            <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext, DarkModeProvider}