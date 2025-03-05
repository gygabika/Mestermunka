import { useState } from 'react'
import './Belepes.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title id="page-title">Bejelentkezés</title>
  <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="bejelentkezes.css" />
  <div className="container">
    <h1 id="main-title">Bejelentkezés</h1>
    <div id="google_translate_element" />
    <form id="loginForm">
      <label htmlFor="loginUsername" id="username-label">
        Felhasználónév:
      </label>
      <input
        type="text"
        id="loginUsername"
        name="loginUsername"
        placeholder="Felhasználónév"
        required=""
      />
      <label htmlFor="loginPassword" id="password-label">
        Jelszó:
      </label>
      <input
        type="password"
        id="loginPassword"
        name="loginPassword"
        placeholder="Jelszó"
        required=""
      />
      <button type="submit" id="login-button">
        Bejelentkezés
      </button>
    </form>
    <div id="message" />
    <button
      id="register-button"
      onclick="window.location.href='regisztracio.html'"
      className="btn btn-link"
    >
      Regisztráció
    </button>
    <p>
      <a id="adminos" href="../admin/index.html" className="btn btn-warning">
        Belépés az Admin oldalra
      </a>
    </p>
  </div>
</>

  )
}

export default App
