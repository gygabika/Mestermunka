import './Berleseim.css'
import '../../bootstrap/css/bootstrap.min.css'


export function Berleseim() {
  return(
    <>
 
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
        <a href="#">További részletek</a>
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
        <a href="#">További részletek</a>
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
        <a href="#">További részletek</a>
      </div>
    </section>

</>

  )
}