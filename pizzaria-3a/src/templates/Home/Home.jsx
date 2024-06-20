import { Link } from "react-router-dom"
import Sidebar from "../../components/Menu/Sidebar"
import Header from "../../components/Header/Header"
import logo from '../../assets/images/logo.png'

const Home = () =>{

    return(
        <div className="d-flex">

            <Sidebar />
            <div className="p-3 w-100">
              <Header 
                goto={'/home'}
                title={'Home'}
                logo={logo}
                />
              <h2>Conteúdo Home</h2>
            </div>
         
        </div>

    )

}

export default Home