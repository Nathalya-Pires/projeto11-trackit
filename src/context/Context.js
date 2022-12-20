import { createContext, useState } from "react";

const context = createContext();

export function UserProvider({ children }) {
  const [config, setConfig] = useState({});
  const [imagem, setImagem] = useState({});
  const [habitos, setHabitos] = useState(undefined);
  const [progresso, setProgresso] = useState(0);

  return (
    <context.Provider 
    value={{ 
        config, setConfig, 
        imagem, setImagem,
        habitos, setHabitos,
        progresso, setProgresso
        }}>

      {children}
    </context.Provider>
  );
}

export default context;
