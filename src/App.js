import logo from './logo.svg';
import './App.css';
import Register from './pages/register'
import AddProduct from './pages/addProduct';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';

import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
    <AddProduct/>
    </div>
  );
}

export default App;
