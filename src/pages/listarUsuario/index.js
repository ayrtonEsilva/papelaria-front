import '../../pages/global.css'
import React, {useState, useEffect} from 'react';
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom'
import Head from '../../componentes/Head';
import Editarusuario from '../editarUsuario';



export default function Listausuario(){
    const [dados, setDados] = useState([]);
    const [banco, setBanco] = useState([]);

    

    useEffect(()=>{
        mostrardados();
    },[])

    function mostrardados()
    {
        setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
    }

   const Apagar = (id) => {
        confirmAlert({
          title: 'Excluir usuário',
          message: 'Tem certeza que deseja excluir este usuário?',
          buttons: [
            {
              label: 'Sim',
              onClick: () => {
                let dadosnovos = banco.filter(item => item.id !== id);
                localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
                setBanco(dadosnovos);
              }
            },
            {
              label: 'Não',
              onClick: () => alert('Click No')  
            }
          ]
        });
      };

    return(
        <div className="dashboard-container">
            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
            <Head title='Lista de usuários'/>
            
                <div>
                    <Link to="/cadastrousuario" className='btn-novo'> Novo Cadastro</Link>
                </div>
                <table >
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        banco.map((usu)=>{

                            return(
                                <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    <td className='botoes'> 
                                    <Link to={`/editarusuario/${usu.id}`} >
                                    <FiEdit size={20} 
                                    color='blue'
                                    onClick={(e)=>Editarusuario}
                                    />
                                    </Link>
                                    </td>
                                    <td className='botoes'> 
                     
                                    <FiTrash 
                                    size={20} 
                                    color='red'
                                    onClick={(e)=>Apagar(usu.id)}
                                    />
                                    </td>
                                    
                                </tr>
                            )
                        
                        })
                            

                    }                
                        
                    

                </table>
            </div>
        </div>
    )
}