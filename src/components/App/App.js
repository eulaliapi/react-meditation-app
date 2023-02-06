import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from '../Forms/Register';
import Login from '../Forms/Login';
import RequireAuth from '../Auth/RequireAuth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<RequireAuth/>}>
          <Route path="/main" element={<Main />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;