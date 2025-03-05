import './App.css'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Fooldal } from './Oldalak/Fooldal'
import { Autok } from './Oldalak/Autok'
import { Berleseim } from './Oldalak/Berleseim'
import { Profilom } from './Oldalak/Profilom'
import { Hirek } from './Oldalak/Hirek'
import { Layout } from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/"  element={ <Fooldal/> }/>
          <Route path="/Autok"  element={ <Autok/> }/>
          <Route path="/Berleseim"  element={ <Berleseim/> }/>
          <Route path="/Profilom"  element={ <Profilom/> }/>
          <Route path="/Hirek"  element={ <Hirek/> }/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
