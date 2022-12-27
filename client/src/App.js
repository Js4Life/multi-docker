import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Link,Route } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      <header className="App-header">
        <Route exact path="/" component={Fib} />
        <Route path="otherpage" component={OtherPage} />
      </header>
    </div>
    </Router>
    
  );
}

export default App;
