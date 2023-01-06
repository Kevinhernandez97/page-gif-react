import React, { useState } from "react"

const Context1 = React.createContext({})

function GifsContextProvider ({children}) {
    const [gifs, setGifs] = useState([]);
    return (
    <Context1.Provider 
    value={{gifs, setGifs}}>
    {children}
    </Context1.Provider>
    )
}

export { GifsContextProvider } 
export { Context1 }