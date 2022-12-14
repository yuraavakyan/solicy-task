import './App.css';
import Accounts from './components/Accounts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/accounts' exact element={<Accounts />} />
          <Route path='/accounts/:id' exact element={<Account />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
