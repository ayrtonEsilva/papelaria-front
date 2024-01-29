import '../../pages/global.css'
import React, {useState, useEffect} from 'react';
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom'
import Head from '../../componentes/Head';
import Editarusuario from '../editarUsuario';



export default function Listaprodutos(){
    const [dados, setDados] = useState([]);
    const [banco, setBanco] = useState([]);

    // const dados = [
    //     {id:1,nome:"carlos",email:"carlos@gmail.com",Senha:"123"},
    //     {id:2,nome:"Felipe",email:"felipe@gmail.com",Senha:"321"},
    //     {id:3,nome:"Ayrton",email:"ayrton@gmail.com",Senha:"321"},
    //     {id:4,nome:"Nilson",email:"nilson@gmail.com",Senha:"321"},
    //     {id:5,nome:"Nero",email:"nero@gmail.com",Senha:"321"}
    // ]

    useEffect(()=>{
        mostrardados();
    },[])

    function mostrardados()
    {
        setBanco(JSON.parse(localStorage.getItem("cd-produtos") || "[]"));
    }

   const Apagar = (id) => {
        confirmAlert({
          title: 'Excluir prduto',
          message: 'Tem certeza que deseja excluir este produto?',
          buttons: [
            {
              label: 'Sim',
              onClick: () => {
                let dadosnovos = banco.filter(item => item.id !== id);
                localStorage.setItem("cd-produtos", JSON.stringify(dadosnovos));
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
            <Head title='Lista de produtos'/>
            
                <div>
                    <Link to="/cadastroprodutos" className='btn-novo'> Novo Produto</Link>
                </div>
                <table >
                    <tr>
                        <th>Id</th>
                        <th>status</th>
                        <th>descrição</th>
                        <th>estoque minimo</th>
                        <th>estoque máximo</th>
                    </tr>
                    {
                        banco.map((usu)=>{

                            return(
                                <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.status}</td>
                                    <td>{usu.descricao}</td>
                                    <td>{usu.estoque_minimo}</td>
                                    <td>{usu.estoque_maximo}</td>
                                    <td className='botoes'> 
                                    <Link to={`/editarprodutos/${usu.id}`} >
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