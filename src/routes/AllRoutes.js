
import {Routes,Route} from 'react-router-dom';
import {Baki,Home} from '../pages';
import { SignupPage } from '../pages';
import { LoginPage } from '../pages';
import { Firdevsi } from '../pages';
import { Hayyam } from '../pages';
import { Mevlana } from '../pages';
import { Sadi } from '../pages';
import { Hafız } from '../pages';

export const AllRoutes = () => {
  return (
    <div >
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
        </Routes>
    </div>
  )
}

