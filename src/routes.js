import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Logon from './pages/logon';
import Dashboard from './pages/dashboard';
import Listausuario from './pages/listarUsuario';
import Cadastrousuario from './pages/CadastroUsuário';
import Editarusuario from './pages/editarUsuario';
import Listarprodutos from './pages/listarProdutos';
import Editarprodutos from './pages/editarProdutos';
import Cadastroprodutos from './pages/CadastroProdutos';


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/listausuario" element={<Listausuario />} />
                <Route path="/cadastrousuario" element={<Cadastrousuario />} />
                <Route path="/editarusuario/:id" element={<Editarusuario />} />
                <Route path="/listaprodutos" element={<Listarprodutos />} />
                <Route path="/editarprodutos/:id" element={<Editarprodutos />} />
                <Route path="/cadastroprodutos" element={<Cadastroprodutos />} />
            </Routes>
        </BrowserRouter>
    )
}