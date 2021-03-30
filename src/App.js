import { Switch, Route} from 'react-router';
import { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';
import ShoppingCart from './ShoppingCart';
import AllBooks from './AllBooks';


const URL = 'http://localhost/kirjakauppa/'

function App() {

  // const [useState, setUseState]  = useState(0);


  /*useEffect(() => {
    let status = 0; 
    fetch (URL + 'index.php')
      .then(res => {
        status = parseInt(res.status);
        return res.json();
      })
      .then(
        (res) => {
          if ( status === 200) {
            setEditList(res);
          } else {
            alert(res.error); 
          }
        }, (error) => {
          alert(error);
        }
      )
  }, []);*/

  return (
    <div>
      <main className="container pb-5">
        <Header />
        <Switch>
          <Route path="/" component={Content} exact/>
          <Route path="/LoginPage" component={LoginPage} /> 
          <Route path="/ShoppingCart" component={ShoppingCart} />
          <Route path="/AllBooks" component={AllBooks} />
        </Switch>
      </main>
      <div className="container bottomBg">
        <Footer />
      </div>
  </div>
  );
}

export default App;
