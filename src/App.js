
import './App.css';
import { AllRoutes } from './routes/AllRoutes';

import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <div >
      <AuthProvider>
      <Header/>
      <AllRoutes/>
      <Footer/>
      </AuthProvider>

      
    </div>
  );
}

export default App;
