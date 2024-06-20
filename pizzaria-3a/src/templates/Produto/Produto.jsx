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
                title={'home'}
                logo={logo}
                />
            <section className="m-2 p-2 shadow-lg">
                <div  className="d-flex justify-content-around">
                    <Link to={'/produtoslista'}
                    className="btn btn-lg btn-primary">
                        Lista de Produto
                    </Link>
                    <Link to={'/produtonovo'}
                    className="btn btn-lg btn-warning">
                        Novo Produto
                    </Link>
                </div>

            </section>
            </div>
         
        </div>

    )

}

export default Produto