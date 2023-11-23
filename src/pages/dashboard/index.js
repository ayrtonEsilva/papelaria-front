import './styles2.css'
import Logo from '../../assets/img/logo2.jpg';
import Menu from '../../componentes/menu';



export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <h1>Página principal</h1>
            </div>
        </div>
    )
}