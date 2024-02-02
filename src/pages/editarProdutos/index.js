import React,{useEffect, useState} from 'react';
import '../../pages/global.css'
import{ FiFilePlus }from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import Menu from '../../componentes/menu';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom'
import Head from '../../componentes/Head';


export default function Cadastroprodutos(){
    const navigate = useNavigate();
    const [id, setNome] = useState("");
    const [status, setStatus] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estoque_minimo, setEstoque_minimo] = useState("");
    const [estoque_maximo, setEstoque_maximo] = useState("");
    const usuario={
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        status,
        descricao,
        estoque_minimo,
        estoque_maximo
    }

    

    function salvardados(e){
        e.preventDefault();
        // console.log(usuario);
        let i=0;
        if(status=="")
        i++;
       else if(descricao=="")
        i++;
       else if(estoque_minimo=="")
       i++;
       else if(estoque_maximo=="")
       i++;
      if(i==0)
       {
         const banco =JSON.parse(localStorage.getItem("cd-produtos") || "[]");
         banco.push(usuario);
         localStorage.setItem("cd-produtos",JSON.stringify(banco));
         alert("Produto salvo com sucesso");
         navigate('/listaprodutos');
       }else{
        alert("Verifique! Há campos vazios!")
       }
        }
    return(
        <div className="dashboard-container">
            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <Head title='Editar produto'/>

                <div class="form-container">
                    <form className='form-cadastro' onSubmit={salvardados}>
                        <input type='text' 
                        value={status}
                        onChange={e=>setStatus(e.target.value)}
                        placeholder='Digite o status do produto' 
                        />


                        <input type='text'
                        value={descricao}
                        onChange={e=>setDescricao(e.target.value)}
                         placeholder='Digite a dercição do produto' 
                         />


                        <input type='text' 
                        value={estoque_minimo}
                        onChange={e=>setEstoque_minimo(e.target.value)}
                        placeholder='Digite o estoque mínimo' 
                        />


                        <input type='text' 
                        value={estoque_maximo}
                        onChange={e=>setEstoque_maximo(e.target.value)}
                        placeholder='Digite o estoque máximo' 
                        />


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