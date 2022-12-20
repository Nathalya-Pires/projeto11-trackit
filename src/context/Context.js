import { createContext, useState } from "react";

const context = createContext();

export function UserProvider({ children }) {
  const [config, setConfig] = useState({});
  const [imagem, setImagem] = useState({});
  const [habitos, setHabitos] = useState(undefined);

  return (
    <context.Provider 
    value={{ 
        config, setConfig, 
        imagem, setImagem,
        habitos, setHabitos
        }}>

      {children}
    </context.Provider>
  );
}

export default context;
