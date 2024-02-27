import '../../pages/global.css'
import React, {useState, useEffect} from 'react';
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom'
import Head from '../../componentes/Head';
import Editarusuario from '../editarUsuario';



export default function Listarsaidaprodutos(){
    const [dados, setDados] = useState([]);
    const [banco, setBanco] = useState([]);

   

    useEffect(()=>{
        mostrardados();
    },[])

    function mostrardados()
    {
        setBanco(JSON.parse(localStorage.getItem("cd-saidaprodutos") || "[]"));
    }

//    const Apagar = (id) => {
//         confirmAlert({
//           title: 'Excluir entrada do produto',
//           message: 'Tem certeza que deseja excluir esta entrada do produto?',
//           buttons: [
//             {
//               label: 'Sim',
//               onClick: () => {
//                 let dadosnovos = banco.filter(item => item.id !== id);
//                 localStorage.setItem("cd-entradaprodutos", JSON.stringify(dadosnovos));
//                 setBanco(dadosnovos);
//               }
//             },
//             {
//               label: 'Não',
//               onClick: () => alert('Click No')  
//             }
//           ]
//         });
//       };

      function Mostrarproduto(id) {
        let descricao_produto= "";
        let lista =JSON.parse(localStorage.getItem("cd-saidaprodutos") || "[]");
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
            <Head title='Entrada de produtos'/>
            
                <div>
                    <Link to="/cadastrosaidaprodutos" className='btn-novo'> Novo Produto</Link>
                </div>
                <table >
                    <tr>
                        <th>Id</th>
                        <th>Id produto</th>
                        <th>Quantidade</th> 
                        <th>Data da saida</th>
                        <th>Valor do produto</th>
                    </tr>
                    {
                        banco.map((entpro)=>{

                            return(
                                <tr key={entpro.toString()}>
                                    <td>{entpro.id}</td>
                                    <td>{Mostrarproduto(entpro.id_produto)}</td>
                                    <td>{entpro.qtde}</td>
                                    <td>{entpro.data_entrada}</td>
                                    <td>{entpro.valor_unitario}</td>
                                    
                                    
                                    
                                </tr>
                            )
                        
                        })
                            

                    }                
                        
                    

                </table>
            </div>
        </div>
    )
}