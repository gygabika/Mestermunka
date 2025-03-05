import { useState } from 'react'
import './Belepes.css'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title id="page-title">Regisztráció</title>
  <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="bejelentkezes.css" />
  <div className="container">
    <h1 id="page-title">Regisztráció</h1>
    <div id="google_translate_element" />
    <form id="registrationForm">
      <label htmlFor="username" id="username-label">
        Felhasználónév:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Felhasználónév"
        required=""
      />
      <select id="contactType" onchange="updatePlaceholder()">
        <option value="email">E-mail</option>
        <option value="phone">Telefonszám</option>
      </select>
      <input type="text" id="contactInput" name="contactInput" required="" />
      <label htmlFor="password" id="password-label">
        Jelszó:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Jelszó"
        required=""
      />
      <label htmlFor="confirmPassword" id="confirm-password-label">
        Jelszó megerősítése:
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Jelszó megerősítése"
        required=""
      />
      <button type="submit" id="register-button">
        Regisztráció
      </button>
    </form>
    <div id="message" />
    <button
      id="login-button"
      onclick="window.location.href='bejelentkezes.html'"
      className="btn btn-link"
    >
      Bejelentkezés
    </button>
  </div>
</>

  )
}
 
export default App