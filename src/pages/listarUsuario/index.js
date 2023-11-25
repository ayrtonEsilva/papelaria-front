import '../../pages/global.css'

import Menu from '../../componentes/menu';



export default function Listausuario(){
    const dados = [
        {id:1,nome:"carlos",email:"carlos@gmail.com",Senha:"123"},
        {id:2,nome:"Felipe",email:"felipe@gmail.com",Senha:"321"},
        {id:3,nome:"Ayrton",email:"ayrton@gmail.com",Senha:"321"},
        {id:4,nome:"Nilson",email:"nilson@gmail.com",Senha:"321"},
        {id:5,nome:"Nero",email:"nero@gmail.com",Senha:"321"}
    ]
    return(
        <div className="dashboard-container">
            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <h1>Lista de Usuário </h1>
                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    {
                        dados.map((usu)=>{
                            return(
                                <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </div>
    )
}