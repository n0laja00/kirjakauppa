import { Switch, Route } from 'react-router';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div>
      <main className="container-fluid pb-5">
        <Header />
        <Switch>
          <Route path="/" component={Content} exact/>
          <Route path="/LoginPage" component={LoginPage} /> 
        </Switch>
      </main>
      <div className="container-fluid bottomBg">
        <Footer />
      </div>
  </div>
  );
}

export default App;
