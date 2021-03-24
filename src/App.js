import { Switch, Route } from 'react-router';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
  <div className="container">
    <Header />
    <Switch>
      <Route path="/" component={Content} exact/>
      <Route path="/LoginPage" component={LoginPage} /> 
      <Route path="/ShoppingCart" component={ShoppingCart} /> 
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
