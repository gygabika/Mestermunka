import { useState } from 'react'
import './App.css'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="hirlap.css" />
  <title>DriveUs/HÍRLAP</title>
  <header>
    <h1 id="focim">DriveUs</h1>
    <nav>
      <a href="../autok/autok.html">AUTÓK</a>
      <a href="../berleseim/berleseim.html">BÉRLÉSEIM</a>
      <a href="../profilom/profilom.html">PROFILOM</a>
      <a href="../fooldal/index.html">FŐOLDAL</a>
    </nav>
    <div id="google_translate_element" />
  </header>
  <main>
    <section className="intro">
      <h1>DriveUs Hírek és Újdonságok</h1>
      <p>
        Maradjon naprakész a legfrissebb hírekkel és ajánlatokkal a DriveUs
        világából! Itt található minden fontos információ az autóbérlés
        világából, új járműveinkről, promócióinkról és szolgáltatásainkról.
      </p>
    </section>
    <section className="news-container">
      <div className="news-card">
        <h4>Új prémium modellek elérhetők!</h4>
        <p>
          Örömmel értesítjük kedves ügyfeleinket, hogy a DriveUs kínálatában új
          prémium modellek is megjelentek! A legújabb autókat mostantól bérlésre
          kínáljuk, hogy még kényelmesebbé váljanak utazásai.
        </p>
        <a href="#">Tudj meg többet</a>
        <div className="more-details">
          <p>
            A prémium modellek között megtalálható a legújabb elektromos
            luxusautó és a legjobb sportmodellek. Nézze meg kínálatunkat!
          </p>
        </div>
      </div>
      <div className="news-card">
        <h4>Különleges akciók és kedvezmények</h4>
        <p>
          A DriveUs most különleges kedvezményekkel várja! Kérjen akár 20%-os
          engedményt a hosszú távú bérlésre. Ne hagyja ki ezt a lehetőséget!
        </p>
        <a href="#">Tudj meg többet</a>
        <div className="more-details">
          <p>
            A prémium modellek között megtalálható a legújabb elektromos
            luxusautó és a legjobb sportmodellek. Nézze meg kínálatunkat!
          </p>
        </div>
      </div>
      <div className="news-card">
        <h4>Új ügyfélszolgálati szolgáltatás</h4>
        <p>
          Az új ügyfélszolgálati rendszerünk biztosítja, hogy minden kérdését
          gyorsan és egyszerűen megválaszoljuk, akár telefonon, akár online
          chat-en keresztül. A nap 24 órájában elérhetőek vagyunk!
        </p>
        <a href="#">Tudj meg többet</a>
        <div className="more-details">
          <p>
            A prémium modellek között megtalálható a legújabb elektromos
            luxusautó és a legjobb sportmodellek. Nézze meg kínálatunkat!
          </p>
        </div>
      </div>
      <div className="news-card">
        <h4>Új autókat vehetünk bérbe!</h4>
        <p>
          Mostantól újabb autók közül választhat! A legújabb családi és
          sportautó modellek már bérlésre is elérhetők. Ha hosszú utat tervez,
          nálunk mindig talál megfelelő járművet.
        </p>
        <a href="#">Tudj meg többet</a>
        <div className="more-details">
          <p>
            A prémium modellek között megtalálható a legújabb elektromos
            luxusautó és a legjobb sportmodellek. Nézze meg kínálatunkat!
          </p>
        </div>
      </div>
      <div className="news-card">
        <h4>Új, kényelmes bérlési lehetőség</h4>
        <p>
          A DriveUs mostantól extra kényelmes bérlési lehetőséget kínál! Az új,
          egyszerűbb bérlés és gyors kiszolgálás biztosítja, hogy utazásai
          mindig zökkenőmentesek legyenek.
        </p>
        <a href="#">Tudj meg többet</a>
        <div className="more-details">
          <p>
            A prémium modellek között megtalálható a legújabb elektromos
            luxusautó és a legjobb sportmodellek. Nézze meg kínálatunkat!
          </p>
        </div>
      </div>
      <div className="news-card">
        <h4>Év autója verseny</h4>
        <p>
          Csatlakozzon az "Év Autója" versenyhez! Töltsön el egy napot a
          legújabb modellek volánjánál, és szavazzon kedvencére, hogy milyen
          autókat szeretne legközelebb bérbe venni!
        </p>
        <a href="#">Tudj meg többet</a>
        <div className="more-details">
          <p>
            A prémium modellek között megtalálható a legújabb elektromos
            luxusautó és a legjobb sportmodellek. Nézze meg kínálatunkat!
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