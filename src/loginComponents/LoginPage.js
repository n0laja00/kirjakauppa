import React, { useState } from 'react'
import { useHistory } from 'react-router';

export default function LoginPage({setUserStorage}) {
  const [email, setEmail] = useState('admin.user.0988');
  const [password, setPassword] = useState('saariselanritari123');
  const URL = 'http://localhost/kirjakauppa/login.php/';

  let history = useHistory();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    }

    const response = await fetch(URL, config);
    const json = await response.json();

    if (response.ok) {
      setUserStorage(json);
      history.push('/LoginSuccessful');
    } else {
      alert("Kirjautuminen epäonnistui. Tarkista käyttäjänimi ja salasana.");
    }

  }

  // tämä sivulle jonne ei pääse kirjautumatta
  //   if (user===null) {
  //     return <Redirect to="/LoginPage" />
  // }

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="customLoginBorder p-4 my-3">
            <div className="row d-flex justify-content-center">
              <form onSubmit={login} className="col-10 col-lg-8">

                <h3 className="text-center text-white">Kirjaudu sisään</h3>
                <div className="mt-4">
                  <label className="visually-hidden">Käyttäjänimi</label>
                  <input id="email" className="form-control mt-2" type="text" placeholder="sähkäposti"
                    value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                  <label className="visually-hidden">Salasana</label>
                  <input id="password" className="form-control mt-2" type="password" placeholder="salasana"
                    value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button className="loginButton mt-3 mb-2 px-5">Login</button>

              </form>
            </div>
          </div>
        </div>
      </div>

      <h3 className=" my-1 text-center">Tai</h3>

      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="customLoginBorder p-4 my-3">
            <div className="row d-flex justify-content-center">
              <form >
                <h3 className="text-center text-white">Luo tili</h3>
                <div className="mb-3">
                  <label  className="form-label">Etunimi</label>
                  <input type="text" className="form-control" id="fname"/>
                </div>
                <div className="mb-3">
                  <label  className="form-label">Sukunimi</label>
                  <input type="text" className="form-control" id="lname"/>
                </div>
                <div className="mb-3">
                  <label  className="form-label">Sähköposti</label>
                  <input type="email" className="form-control" id="email2"/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Salasana</label>
                  <input type="password" className="form-control" id="password2"/>
                </div>
                <button type="submit" className="loginButton mt-2 mb-2 px-4 py-1">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
