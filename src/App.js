import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/Context";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Hoje from "./pages/Hoje";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
