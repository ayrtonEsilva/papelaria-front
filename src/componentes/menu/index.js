import './styles.css'
import {Link} from 'react-router-dom' 
export default function Menu(){
    return(
        <div>
            
            <nav>
                <Link to="/listausuario" className='link'>USUÁRIO</Link>
                <Link to="/listaprodutos" className='link'>PRODUTOS</Link>
                <Link to="/listaentrada" className='link'>ENTRADA DE PRODUTOS</Link>
                <Link to="/listaestoque" className='link'>ESTOQUE</Link>
                <Link to="/usuario" className='link'>PRODUTO</Link>
                <Link to="/usuario" className='link'>PRODUTO</Link>
               
            </nav>
            
        </div>  
    )
}