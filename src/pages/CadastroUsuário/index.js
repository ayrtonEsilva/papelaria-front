import React,{useState} from 'react';
import '../../pages/global.css'
import{ FiFilePlus }from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import Menu from '../../componentes/menu';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom'
import Head from '../../componentes/Head';


export default function Cadastrousuario(){
    const [nome, setNome] = useState("");
    return(
        <div className="dashboard-container">
            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <Head title='Cadastro de Usuário'/>

                <div class="form-container">
                    <form className='form-cadastro'>
                        <input type='text'
                        value={nome}
                        onChange={e=>setNome(e.target.value)}
                         placeholder='Digite o nome do usuário' 
                         />
                        <input type='email' placeholder='Digite o email' />
                        <input type='password' placeholder='Digite a senha' />
                        <div class="acao">
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                                </button>
                            <button className='btn-cancel'>
                                <GiCancel />
                                Cancelar
                    
                                </button>
                        </div>
                    
                    </form>
                    
                </div>    
            </div>

            
        </div>
    )
}