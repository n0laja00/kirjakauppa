import { Switch, Route, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';
import ShoppingCart from './ShoppingCart';
import AllBooks from './AllBooks';
import Navbar from './Navbar';
import AddItem from './AddItem';


function App() {
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name });
    }
  }, [location.state]);



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
          <Route path="/" component={Content} exact />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/ShoppingCart" component={ShoppingCart} />
          <Route path="/AddItem" component={AddItem}/>
          <Route path="/Navbar" component={Navbar} setCategory={setCategory} />

          <Route path="/AllBooks" render={() => <AllBooks
            category={category} />}
            exact />
            <Route path="/BookDetails" />
        </Switch>
      </main>
      <div className="container bottomBg">
        <Footer />
      </div>
    </div>
  );
}

export default App;
