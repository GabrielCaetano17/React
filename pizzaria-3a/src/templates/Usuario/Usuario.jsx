import { Link } from "react-router-dom"
import Sidebar from "../../components/Menu/Sidebar"
import Header from "../../components/Header/Header"
import logo from '../../assets/images/logo.png'

const Usuario = () => {

    return (
        <div className="d-flex">

            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/home'}
                    title={'Usuario'}
                    logo={logo}
                />
                
                <section className="m-2 p-2 shadow-lg">
                <div>
                    <Link to={'/usuarionovo'}
                    className="btn btn-lg btn-primary">
                        Novo Usuario
                    </Link>
                    <Link to={'/usuariolista'}
                    className="btn btn-lg btn-warning">
                        Lista de Usuarios
                    </Link>
                </div>

            </section>

            </div>

        </div>


    )

}

export default Usuario