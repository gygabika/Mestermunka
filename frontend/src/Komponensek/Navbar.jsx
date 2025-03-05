import { Link } from 'react-router-dom'

export function Navbar() {
    return(
        <>
            <Link to="/">
                <button>Főoldal</button>
            </Link>
            <Link to="/Autok">
                <button>Autók</button>
            </Link>
            <Link to="/Berleseim">
                <button>Bérléseim</button>
            </Link>
            <Link to="/Profilom">
                <button>Profilom</button> 
            </Link>
            <Link to="/Hirek">
                <button>Hírek</button>
            </Link>
        </>
    )
}