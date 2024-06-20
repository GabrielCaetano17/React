import { Routes, Route, Router } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"
import Login from "../templates/Login/Login"
import ForgotPass from "../templates/Login/ForgotPass"
import Mensagem from "../templates/Mensagem/Mensagem"
import Produto from "../templates/Produto/Produto"
import Usuario from "../templates/Usuario/Usuario"
import ProdutosLista from "../templates/Produto/ProdutosLista" 
import UsuariosLista from "../templates/Usuario/UsuariosLista"
const AppRoutes = () => {

    return (
        <div>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpass" element={<ForgotPass />} />
            <Route path="/mensagem" element={<Mensagem />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/produtoslista" element={<ProdutosLista />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/usuariolista" element={<UsuariosLista />} />

            </Routes>
        </div>
    )

} 
export default AppRoutes