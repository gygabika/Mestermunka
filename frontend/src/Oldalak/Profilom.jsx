import { Link } from 'react-router-dom'
import './Profilom.css'
import '../../bootstrap/css/bootstrap.min.css'
import '../assets/ceg_logo.png'

export function Profilom() {
  return(
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DriveUs/PROFILOM</title>
  <div className="profile-update-container">
    <h2>Profilkép feltöltése és adatok frissítése</h2>
    <form id="profile-form">
      <div className="profile-section">
        <div
          className="profile-picture-frame"
          onclick="document.getElementById('profile-picture').click()"
        >
          Kattints a feltöltéshez
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <div className="left-align-fields">
          <label htmlFor="current-username">Jelenlegi felhasználónév:</label>
          <input type="text" id="current-username" required="" />
          <label htmlFor="password">Jelszó:</label>
          <input type="password" id="password" required="" />
        </div>
        <div className="left-align-fields">
          <label htmlFor="username">Új felhasználónév:</label>
          <input type="text" id="username" />
          <label htmlFor="personal-id">Személyi szám:</label>
          <input type="text" id="personal-id" />
          <label htmlFor="license-number">Jogosítványszám:</label>
          <input type="text" id="license-number" />
        </div>
      </div>
      <button type="submit">Adatok frissítése</button>
    </form>
  </div>
  <div className="table-container">
    <table>
      <tbody>
        <tr>
          <th>Előnyök</th>
          <th>Új tag</th>
          <th>Bronz tag</th>
          <th>Ezüst tag</th>
          <th>Arany tag</th>
        </tr>
        <tr>
          <td>Okosfoglalás</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
        </tr>
        <tr>
          <td>Kedvezményes kuponok</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
        </tr>
        <tr>
          <td>Kiemelt támogatás</td>
          <td />
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
        </tr>
        <tr>
          <td>Nincs lemondási díj</td>
          <td />
          <td />
          <td className="checkmark">✔</td>
          <td className="checkmark">✔</td>
        </tr>
        <tr>
          <td>Maximális kedvezmény</td>
          <td />
          <td>20%</td>
          <td>30%</td>
          <td>40%</td>
        </tr>
      </tbody>
    </table>
    <br />
    <button onclick="openModal('Bronz tag', '20')">
      Havi bronz tag vásárlása
    </button>
    <button onclick="openModal('Ezüst tag', '30')">
      Havi ezüst tag vásárlása
    </button>
    <button onclick="openModal('Arany tag', '40')">
      Havi arany tag vásárlása
    </button>
  </div>
  <div id="transaction-modal" className="modal">
    <div className="modal-content">
      <h2 id="transaction-status" />
      <p id="card-storage-status" />
      <button onclick="closeTransactionModal()">Bezárás</button>
    </div>
  </div>
  <div id="modal" className="modal">
    <div className="modal-content">
      <h2 id="package-name" />
      <p id="package-price" />
      <label>
        Teljes név: <input type="text" required="" />
      </label>
      <label>
        Kártyaszám: <input type="text" required="" />
      </label>
      <div className="card-input-container">
        <img
          id="card-icon"
          src=""
          alt="Kártya ikon"
          style={{ display: "none", width: 40 }}
        />
      </div>
      <label>
        Lejárati dátum: <input type="date" id="expiry-date" required="" />
        <span id="date-error" style={{ color: "red", display: "none" }}>
          Helytelen dátum!
        </span>
      </label>
      <label>
        CVV: <input type="password" required="" />
      </label>
      <label>
        <input type="checkbox" id="store-card" /> Kártyaadatait eltároljuk?
      </label>
      <button onclick="purchasePackage()">Vásárlás</button>
      <button onclick="closeModal()">Mégse</button>
    </div>
  </div>
</>

  )
}