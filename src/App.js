import { Switch, Route } from 'react-router';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import LoginPage from './LoginPage';

function App() {
  return (
  <main className="container">
    <Header />
    <Switch>
      <Route path="/" component={Content} exact/>
      <Route path="/LoginPage" component={LoginPage} /> 
    </Switch>
    <Footer />
  </main>
  );
}

export default App;
