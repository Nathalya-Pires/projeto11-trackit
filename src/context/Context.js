import { createContext, useState } from "react";

const context = createContext();

export function UserProvider({children}){
    const [config, setConfig] = useState({})
    const [imagem, setImagem] = useState({})

    return(
        <context.Provider
        value={{config,setConfig, imagem, setImagem}}>
            {children}
        </context.Provider>
    )
}

export default context