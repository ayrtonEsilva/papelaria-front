import './styles.css'
import Logo from '../../assets/img/logo2.jpg';



export default function logon(){
    return(
        <div className="logon-container">
            <div>
                <img src={Logo} />
            </div>
            <section className="form">
                <h1 className="">Faça seu login</h1>
                <form >
                    <input placeholder="Email" />
                    <input placeholder="Senha" type='password' />
                    <button type="submit">Entrar</button>
                    <a href="#">Novo Cadastro</a>
                </form>
            </section>
        </div>
    )
}