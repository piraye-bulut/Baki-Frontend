
import {Routes,Route} from 'react-router-dom';
import {Baki,Gazel,Home} from '../pages';
import { SignupPage } from '../pages';
import { LoginPage } from '../pages';
import { Firdevsi } from '../pages';
import { Hayyam } from '../pages';
import { Mevlana } from '../pages';
import { Sadi } from '../pages';
import { Hafız } from '../pages';
import { Kaside } from '../pages';
import { Musammat } from '../pages';
import {Kıta} from "../pages";
import {Matla} from "../pages";
import { AuthProvider } from '../contexts/AuthContext';

export const AllRoutes = () => {
  return (
    <div >
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Baki" element={<Baki/>}/>
            <Route path="/Hayyam" element={<Hayyam/>}/>
            <Route path="/Firdevsi" element={<Firdevsi/>}/>
            <Route path="/Mevlana" element={<Mevlana/>}/>
            <Route path="/Sadi-i-sirazi" element={<Sadi/>}/>
            <Route path="/Hafiz-i-sirazi" element={<Hafız/>}/>
            <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/kaside/:id" element={<Kaside />} />
          <Route path="/musammat/:id" element={<Musammat />} />
          <Route path="/gazel/:id" element={<Gazel />} />
          <Route path="/kıta/:id" element={<Kıta />} />
          <Route path="/matla/:id" element={<Matla />} />
        </Routes>
        </AuthProvider>
    </div>
  )
}

