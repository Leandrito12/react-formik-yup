import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Formulario } from "./components/pages/Home/Form/Form";
import { Login } from "./components/pages/Home/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
