import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="autok.css" />
  <title>DriveUs/AUTÓK</title>
  <header>
    <h1 id="focim">DriveUs</h1>
    <nav>
      <a href="../hirlap/hirlap.html">HÍRLAP</a>
      <a href="../berleseim/berleseim.html">BÉRLÉSEIM</a>
      <a href="../profilom/profilom.html">PROFILOM</a>
      <a href="../fooldal/index.html">FŐOLDAL</a>
    </nav>
    <div id="google_translate_element" />
  </header>
  <main>
    <h2 id="aktualis" className="mb-4 text-center">
      Aktuális ajánlataink
    </h2>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card">
            {" "}
            <div className="card border-light">
              <div className="card-header bg-secondary">
                <span className="fw-bold">Autó</span>
                <span className="float-end">2022-02-27</span>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>
                    <strong>Kategória:</strong> Hatchback
                  </p>
                  <p>
                    <strong>Motor:</strong> 1.6
                  </p>
                  <p>
                    <strong>Fogyasztás:</strong> 5L/100km
                  </p>
                  <p>
                    <strong>Szín:</strong> Fehér
                  </p>
                  <p>
                    <strong>Ülések száma:</strong> 4
                  </p>
                </div>
                <img
                  className="card-img-right p-2"
                  src="../fooldal/bkep2.jpg"
                  alt="Autó kép"
                />
              </div>
              <div className="card-footer text-center">
                <a
                  className="btn btn-primary px-4"
                  href="mailto:driveus@gmail.com?subject=Érdeklődés RefNo: 7&body=Foglalni szeretném az adott járművet!"
                >
                  Foglalás
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4">
      <div className="card">...</div>
    </div>
    <div className="col-12 col-md-4">
      <div className="card">...</div>
    </div>
  </main>
  <footer>
    <img src="../ceg_logo.png" alt="DriveUs Logo" id="footer-img" />
    <p id="footer_p">
      Válogass prémium autóink közül, és indulj útnak stílusosan!
    </p>
  </footer>
</>

  )
}

export default App
