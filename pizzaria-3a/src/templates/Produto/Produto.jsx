import { Link } from "react-router-dom"
import Sidebar from "../../components/Menu/Sidebar"
import Header from "../../components/Header/Header"
import logo from '../../assets/images/logo.png'

const Produto = () =>{

    return(
        <div className="d-flex">

            <Sidebar />
            <div className="p-3 w-100">
            <Header 
                goto={'/home'}
                title={'Home'}
                logo={logo}
                />
            <section className="m-2 p-2 shadow-lg">
                <div>
                    <Link to={'/produtoslista'}
                    className="btn btn-lg btn-warning">
                        Lista de Produto
                    </Link>
                </div>

            </section>
            </div>
         
        </div>

    )

}

export default Produto