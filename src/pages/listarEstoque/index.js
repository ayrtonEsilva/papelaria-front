import '../../pages/global.css'
import React, {useState, useEffect} from 'react';
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom'
import Head from '../../componentes/Head';
import Editarusuario from '../editarUsuario';



export default function Listaestoque(){
    const [dados, setDados] = useState([]);
    const [banco, setBanco] = useState([]);

   

    useEffect(()=>{
        mostrardados();
    },[])

    function mostrardados()
    {
        setBanco(JSON.parse(localStorage.getItem("cd-estoques") || "[]"));
    }

   

      function Mostrarproduto(id) {
        let descricao_produto= "";
        let lista =JSON.parse(localStorage.getItem("cd-produtos") || "[]");
        lista.filter(item => item.id === id).map(value => {
            console.log(value.descricao)
            descricao_produto= value.descricao;
        })
        return descricao_produto;

      }

    return(
        <div className="dashboard-container">
            <div className='menu'>
                <h1></h1>
                <Menu />
            </div>
            <div className='principal'>
            <Head title='Estoque'/>
            
                
                <table >
                    <tr>
                        <th>Id</th>
                        <th>Id produto</th>
                        <th>Quantidade</th> 
                        <th>Valor do produto</th>
                    </tr>
                    {
                        banco.map((est)=>{

                            return(
                                <tr key={est.toString()}>
                                    <td>{est.id}</td>
                                    <td>{Mostrarproduto(est.id_produto)}</td>
                                    <td>{est.qtde}</td>
                                    <td>{est.valor_unitario}</td>
                                    
                                    
                                </tr>
                            )
                        
                        })
                            

                    }                
                        
                    

                </table>
            </div>
        </div>
    )
}