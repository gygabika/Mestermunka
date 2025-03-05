import { Link } from 'react-router-dom'
import './Fooldal.css'
import '../../bootstrap/css/bootstrap.min.css'

export function Fooldal() {
  return(
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DriveUs</title>
  <main>
    <section className="intro">
      <h1>DriveUs - A szabadság, ami mindig úton van.</h1>
      <p>
        Üdvözöljük a DriveUs autóbérlő weboldalán! Mi segítünk Önnek abban, hogy
        minden utazás egy felejthetetlen élmény legyen...
      </p>
    </section>
    <section className="card-container">
      <div className="card">
        <h4>Rugalmas bérlés</h4>
        <p>
          Rövid és hosszú távú autóbérlés egyaránt elérhető. Bármilyen típusú
          autóra van szüksége, mi biztosítjuk Önnek a legjobb opciókat, hogy az
          Ön igényeihez leginkább passzoljon.
        </p>
      </div>
      <div className="card">
        <h4>Széles választék</h4>
        <p>
          A legújabb modellek és különféle típusok. Válasszon prémium, családi
          vagy sportautók közül, hogy minden utazás kényelmes és élvezetes
          legyen.
        </p>
      </div>
      <div className="card">
        <h4>Kiváló állapotú autók</h4>
        <p>
          Minden járművet rendszeresen karbantartunk, hogy Ön biztos lehessen
          abban, hogy a legjobb minőséget kapja. A biztonság és a megbízhatóság
          számunkra elsődleges.
        </p>
      </div>
      <div className="card">
        <h4>Versenyképes árak</h4>
        <p>
          Szolgáltatásainkhoz rendkívül versenyképes árakat kínálunk, hogy
          mindenki számára elérhetővé váljon a prémium autóbérlés élménye.
        </p>
      </div>
      <div className="card">
        <h4>24/7 Ügyfélszolgálat</h4>
        <p>
          Ha bármilyen kérdése lenne, a nap 24 órájában elérhető
          ügyfélszolgálatunk mindig segít Önnek a legjobb megoldásokkal.
        </p>
      </div>
    </section>
    <div className="row">
      <div className="col-6">
        <div className="gallery-container">
          <button id="kovetkezo" className="prev" onclick="moveSlide(-1)">
            ❮
          </button>
          <div className="gallery" id="gallery">
            {/*   <img src="csaladi.jpg" alt="Kép 1"> */}
            <img src="luxus.jpg" alt="Kép 2" />
            <img src="hetkoznapi.jpg" alt="Kép 3" />
            <img src="sport.jpg" alt="Kép 4" />
            {/* <img src="bkep6.jpg" alt="Kép 5">  */}
            <img src="bkep1.jpg" alt="Kép 6" />
            <img src="bkep2.jpg" alt="Kép 7" />
            <img src="bkep3.jpg" alt="Kép 8" />
            <img src="bkep4.png" alt="Kép 9" />
            <img src="bkep5.png" alt="Kép 10" />
          </div>
          <button id="kovetkezo" className="next" onclick="moveSlide(1)">
            ❯
          </button>
        </div>
      </div>
      <div className="col-6">
        <div>
          <p id="pp">
            {" "}
            Az utazás nem csupán az úti célról szól, hanem magáról az élményről
            is. A DriveUs-nál arra törekszünk, hogy minden út kényelmes és
            emlékezetes legyen. Nálunk egyszerű és gyors a bérlés folyamata,
            rejtett költségek nélkül, így teljes nyugalomban indulhatsz útnak.
            Járműveinket rendszeresen karbantartjuk, hogy mindig a legjobb
            minőséget biztosítsuk számodra. Legyen szó városi autózásról vagy
            egy hosszabb országúti kalandról, nálunk megtalálod a tökéletes
            autót. Fedezd fel a vezetés szabadságát velünk!
          </p>
          <button
            id="foglalj"
            className="book-now"
            onclick="window.location.href='../autok/autok.html'"
          >
            FOGLALJ MOST!
          </button>
        </div>
      </div>
    </div>
  </main>

    </>
  )
}