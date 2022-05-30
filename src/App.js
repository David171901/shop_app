import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Login} from './pages/Login'
import { RecoveryPassword } from './pages/RecoveryPassword';
import { Layout } from './containers/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { SendEmail } from './pages/SendEmail';
import { NewPassword } from './pages/NewPassword';
import {MyAccount} from './pages/MyAccount';
import {CreateAccount} from './pages/CreateAccount';
import {Checkout} from './pages/Checkout';
import {Orders} from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/recovery-password" element={<RecoveryPassword/>}/>
            <Route path="/send-email" element={<SendEmail/>} />
            <Route path="/new-password" element={<NewPassword/>} />
            <Route path="/account" element={<MyAccount/>} />
            <Route path="/signup" element={<CreateAccount/>} />
					  <Route path="/checkout" element={<Checkout/>} />
					  <Route path="/orders" element={<Orders/>} />
            <Route path="*" element={<NotFound/>}/>              
          </Routes>      
      </Layout>
    </BrowserRouter>

  );
}

export default App;
