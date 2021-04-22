import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function LoginPage({setUser}) {
  const [email, setEmail] = useState('admin.user.0988');
  const [password,setPassword] = useState('saariselanritari123');
  const URL = 'http://localhost/kirjakauppa/login.php/';

  let history = useHistory();

  async function login(e) {
      e.preventDefault();
      const formData = new FormData();
  
      formData.append('email',email);
      formData.append('password',password);
  
      const config = {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept' : 'application/json',
        },
        body: formData
      }
  
      const response = await fetch(URL,config);
      const json = await response.json();
  
      if (response.ok) {
        setUser(json);
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
                    <input id="email" className="form-control mt-2" type="text" placeholder="account/email" 
                    value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label className="visually-hidden">Salasana</label>
                    <input id="password" className="form-control mt-2" type="password" placeholder="password"
                    value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button className="loginButton mt-3 mb-2 px-5">Login</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-3 py-4 d-flex justify-content-center">
        <div className="col-8 col-md-6 col-lg-3">
          <h3 className="pb-3 text-center">Luo tili</h3>
          <div className="row justify-content-center">
            {/* <Link className="d-flex col-sm-3 btn align-items-center justify-content-center categoryButton m-2 link">
              Luo tili
            </Link> */}
            <div className="mt-2 text-center">
              <Link to="/LoginPage">luo tili</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
