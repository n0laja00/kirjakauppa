import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setUser}) {
  useEffect(() => {
    async function logout() {
      const config = {
        method: 'GET',
        credentials: 'include'
      }
  
      const URL = 'http://localhost/kirjakauppa/logout.php/';
      try {
        await fetch(URL,config);
        setUser(null);
      } catch (error) {
        alert(error);
      }
    }
    logout();
  }, [])


  return (
    <div className="row mt-3 py-4 d-flex justify-content-center">
      <div className="col-4"/>
      <div className="col-4">
        <div className="text-center">
          <h3>You have logged out</h3>
          <div>
            <Link to="/">Takaisin etusivulle</Link>
          </div>
          <div>
            <Link to="/LoginPage">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="col-4"/>
    </div>

    
  )
}