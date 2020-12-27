import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserList from './components/UserList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/userlist' component={UserList} />
    </div>
    </BrowserRouter>
  );
}

export default App;
