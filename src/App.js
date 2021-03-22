import { Switch, Route } from 'react-router';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';

function App() {
  return (
  <div className="container shadow">
    <Header />
    <Switch>
      <Route path="/" component={Content} exact/>
      <Route path="/LoginPage" component={LoginPage} /> 
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
