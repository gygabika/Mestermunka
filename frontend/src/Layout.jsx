import { Navbar } from "./Komponensek/Navbar"
import { Outlet } from "react-router-dom"
import { Logo } from './assets/ceg_logo.png'

export function Layout() {
    return(
        <>
            <header>
                <h1 id="focim">DriveUs</h1>
                <Navbar/>
                <div id="google_translate_element"/> 
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <img src="./assets/ceg_logo.png" alt="DriveUs Logo" id="footer-img" />  
                <p id="footer_p">Válogass prémium autóink közül, és indulj útnak stílusosan!</p>
            </footer>
        </>
    )
}