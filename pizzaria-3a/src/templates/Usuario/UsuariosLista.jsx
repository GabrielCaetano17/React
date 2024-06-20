import { Link } from "react-router-dom"
import Sidebar from "../../components/Menu/Sidebar"
import Header from "../../components/Header/Header"
import logo from '../../assets/images/logo.png'

const UsuariosLista = () => {

    return (
        <div className="d-flex">

            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuario'}
                    logo={logo}
                />
                
                <section className="m-2 p-2 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Nivel de Acesso</th>
                                    <th scope="col">Data de Cadastro</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-sm btn-warning">
                                            <i className="bi bi-envelope-open me-2"></i> Abrir
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>

        </div>


    )

}

export default UsuariosLista