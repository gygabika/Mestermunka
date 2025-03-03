import { useState } from 'react'
import './App.css'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="berleseim.css" />
  <title>DriveUs/BÉRLÉSEIM</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Additional styling for hidden content */\n        .more-details {\n            display: none;\n            margin-top: 10px;\n            background-color: #f0f0f0;\n            padding: 10px;\n            border-radius: 5px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        }\n\n        .more-details.show {\n            display: block;\n        }\n\n        .berles-card a {\n            cursor: pointer;\n            color: #b8860b;\n            font-weight: bold;\n            text-decoration: none;\n        }\n\n        .berles-card a:hover {\n            color: #ffd700;\n        }\n    "
    }}
  />
  <header>
    <h1 id="focim">DriveUs</h1>
    <nav>
      <a href="../hirlap/hirlap.html">Hírlap</a>
      <a href="../autok/autok.html">AUTÓK</a>
      <a href="../profilom/profilom.html">PROFILOM</a>
      <a href="../fooldal/index.html">FŐOLDAL</a>
    </nav>
    <div id="google_translate_element" />
  </header>
  <main>
    <section className="intro">
      <h1>Az Ön Bérlései</h1>
      <p>
        Itt találhatók a DriveUs-nál végzett autóbérléseivel kapcsolatos
        részletek és státuszok.
      </p>
    </section>
    <section className="berles-container">
      <div className="berles-card">
        <h4>Bérlés 1: Luxus SUV</h4>
        <p>
          <strong>Időtartam:</strong> 2025. február 10 - 2025. február 15
        </p>
        <p>
          <strong>Ár:</strong> 90.000 Ft
        </p>
        <p>
          <strong>Állapot:</strong> Befejezve
        </p>
        <a className="more-info">További részletek</a>
        <div className="more-details">
          <p>
            Ez a bérlés a legújabb modellű Luxus SUV, amely kiváló kényelmet és
            vezetési élményt biztosít. Az autó minden igényt kielégít a hosszú
            távú utazásokhoz is.
          </p>
        </div>
      </div>
      <div className="berles-card">
        <h4>Bérlés 2: Sportautó</h4>
        <p>
          <strong>Időtartam:</strong> 2025. március 1 - 2025. március 5
        </p>
        <p>
          <strong>Ár:</strong> 120.000 Ft
        </p>
        <p>
          <strong>Állapot:</strong> Jelenleg zajlik
        </p>
        <a className="more-info">További részletek</a>
        <div className="more-details">
          <p>
            A sportautó bérlés az egyik legizgalmasabb élmény. A bérlés ideje
            alatt az autócsúcsok világába merülhet el, ahol minden pillanat
            gyors és dinamikus.
          </p>
        </div>
      </div>
      <div className="berles-card">
        <h4>Bérlés 3: Családi autó</h4>
        <p>
          <strong>Időtartam:</strong> 2025. április 10 - 2025. április 15
        </p>
        <p>
          <strong>Ár:</strong> 70.000 Ft
        </p>
        <p>
          <strong>Állapot:</strong> Jövőbeli bérlés
        </p>
        <a className="more-info">További részletek</a>
        <div className="more-details">
          <p>
            Ez a családi autó a kényelmes utazásra van kialakítva, nagy hely és
            biztonságos vezetési élmény. Ideális választás családoknak hosszú
            utazásokhoz.
          </p>
        </div>
      </div>
    </section>
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