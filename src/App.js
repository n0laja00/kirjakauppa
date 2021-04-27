import { Switch, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './loginComponents/LoginPage';
import LoginSuccessful from './loginComponents/LoginSuccessful';
import Logout from './loginComponents/Logout';
import ShoppingCart from './ShoppingCart';
import AllBooks from './AllBooks';
import BookDetails from './BookDetails';
import Reviews from './Reviews';
import Breadcrumbs from './Breadcrumbs';
import Registry from './registryComponents/Registry';
import EditItemList from './AdminTools/EditItemList';
import OrderConfirmed from './registryComponents/OrderConfirmed';
import UpdateItem from './AdminTools/UpdateItem';
import CartContextProvider from './contexts/CartContext';

function App() {
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState(null);
  console.log("käyttäjä", user)

  function setUserStorage(e) {
    sessionStorage.setItem = (e);
  }
  

  let location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name });
    }
  }, [location.state]);

  return (
    <div>
      <main className="container pb-5">
          <Header user={user}/>
        <Breadcrumbs />
        <Switch>
          <Route path="/" render={() => <Content setCategory={setCategory} />} exact />
          
          <Route path="/LoginPage" render={() => <LoginPage setUser={setUser} setUserStorage={setUserStorage} />} />
          <Route path="/LoginSuccessful" render={() => <LoginSuccessful user={user} />} />
          <Route path="/logout" render={() => <Logout setUser={setUser} />} />

          <Route path="/ShoppingCart" component={ShoppingCart} />
          <Route path="/EditItemList" render={() => <EditItemList user={user} />} />

          <Route path="/AllBooks" render={() => <AllBooks
            category={category} user={user}/>}
            exact />

          <Route path="/BookDetails/:id" component={BookDetails} />
          <Route path="/UpdateItem/:id" component={UpdateItem}/>
          <Route path="/Reviews/:id" component={Reviews} />
          <Route path="/registryComponents/Registry" component={Registry} />
          <Route path="/OrderConfirmed" component={OrderConfirmed} />
        </Switch>
      </main>
      <div className="container bottomBg">
        <Footer />
      </div>
    </div>
  );
}

export default App;
