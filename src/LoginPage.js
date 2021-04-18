import React, { useState } from 'react'
import { useHistory } from 'react-router';

export default function LoginPage({setUser}) {
    const [username, setUsername] = useState('ylläpitäjä');
    const [password,setPassword] = useState('saariselanritari123');
    const URL = 'http://localhost/kirjakauppa/login.php/';

    let history = useHistory();

    async function login(e) {
        e.preventDefault();
        const formData = new FormData();
    
        formData.append('username',username);
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
          history.push('/AddItem');
        } else {
          alert("Kirjautuminen epäonnistui. Tarkista käyttäjänimi ja salasana.");
        }
    
      }

    return (
        <form onSubmit={login}>
            <div className="row mt-3 py-4 d-flex justify-content-center">
                <div className="col-3">
                <h1 className="pb-3">Kirjautuminen</h1>
                    <div>
                        <label className="visually-hidden">Käyttäjänimi</label>
                        <input id="username" className="form-control mt-2" type="text" placeholder="account/email" 
                        value={username} onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <label className="visually-hidden">Salasana</label>
                        <input id="password" className="form-control mt-2" type="password" placeholder="password"
                        value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    
                    <button className="loginButton mt-3 px-5">Login</button>
                </div>
            </div>
        </form>
    )
}
